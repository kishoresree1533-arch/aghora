import { useState, useEffect, useRef } from "react";
import { getData, saveData, initialProjects, initialServices, syncProjects, syncServices } from "@/lib/data-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
    Plus,
    Trash2,
    Edit2,
    Search,
    Upload,
    MapPin,
    Building2,
    ChevronRight,
    ArrowUpRight,
    ImageIcon,
    X,
    CheckCircle2,
    Settings2
} from "lucide-react";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";

const AdminProjects = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [services, setServices] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const loadData = async () => {
            const projectsData = await syncProjects();
            const servicesData = await syncServices();
            setProjects(projectsData);
            setServices(servicesData);
        };
        loadData();
    }, []);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                toast.error("File limit is 2MB for performance.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const imageToSave = previewImage || editingProject?.image || "/placeholder.svg";

        const projectData = {
            id: editingProject ? editingProject.id : Date.now(),
            title: formData.get("title"),
            category: formData.get("category"),
            type: formData.get("type"),
            location: formData.get("location"),
            scope: formData.get("scope"),
            image: imageToSave,
        };

        try {
            const method = editingProject ? 'PUT' : 'POST';
            const res = await fetch('/server/projects.php', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(projectData)
            });
            const result = await res.json();

            if (result.success) {
                let updatedProjects;
                if (editingProject) {
                    updatedProjects = projects.map(p => p.id === editingProject.id ? projectData : p);
                    toast.success("Project data updated successfully");
                } else {
                    projectData.id = result.id;
                    updatedProjects = [...projects, projectData];
                    toast.success("New project published to website");
                }

                setProjects(updatedProjects);
                saveData("projects", updatedProjects);
                setIsDialogOpen(false);
                setEditingProject(null);
                setPreviewImage(null);
            }
        } catch (error) {
            toast.error("Failed to save to server");
            console.error(error);
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm("Move this project to trash? This will remove it from the public site.")) {
            try {
                const res = await fetch(`/server/projects.php?id=${id}`, { method: 'DELETE' });
                const result = await res.json();
                if (result.success) {
                    const updatedProjects = projects.filter(p => p.id !== id);
                    setProjects(updatedProjects);
                    saveData("projects", updatedProjects);
                    toast.error("Project archived and removed");
                }
            } catch (error) {
                toast.error("Delete failed");
            }
        }
    };

    const filteredProjects = projects.filter(p =>
        p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Premium Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 py-4">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-1 bg-blue-600 rounded-full" />
                        <span className="text-[10px] font-[900] text-blue-600 uppercase tracking-[0.3em]">Manage Projects</span>
                    </div>
                    <h1 className="text-[40px] font-[900] text-slate-900 leading-none tracking-tight uppercase">Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900 opacity-60">List</span></h1>
                    <p className="text-slate-500 font-bold text-sm mt-4 uppercase tracking-wider">View and edit all your projects here.</p>
                </div>

                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if (!open) {
                        setEditingProject(null);
                        setPreviewImage(null);
                    }
                }}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#141B2D] hover:bg-slate-900 text-white rounded-[18px] px-8 h-[64px] font-[900] uppercase tracking-widest text-[11px] shadow-2xl shadow-slate-200 transition-all active:scale-95 flex items-center gap-4">
                            <Plus className="w-5 h-5 text-blue-500" />
                            Add New Project
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px] p-0 rounded-[32px] border-none shadow-[0_50px_100px_rgba(0,0,0,0.15)] bg-white overflow-hidden scrollbar-hide">
                        <DialogHeader className="px-10 pt-10 pb-8 bg-slate-50/50 border-b border-slate-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-600 rounded-2xl shadow-xl shadow-blue-200">
                                    <Settings2 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <DialogTitle className="text-2xl font-[900] text-slate-900 tracking-tight uppercase">
                                        {editingProject ? "Edit Project" : "Add New Project"}
                                    </DialogTitle>
                                    <DialogDescription className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-1">
                                        Fill in the details below
                                    </DialogDescription>
                                </div>
                            </div>
                        </DialogHeader>
                        <form onSubmit={handleSave} className="px-10 py-10 space-y-8 overflow-y-auto max-h-[70vh]">
                            <div className="grid gap-10">
                                {/* Image Upload Area */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Project Image</label>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase">High quality image works best</span>
                                    </div>
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        className="group relative h-[280px] bg-slate-50 rounded-[28px] border-[3px] border-dashed border-slate-100 hover:border-blue-500 hover:bg-white transition-all duration-500 cursor-pointer overflow-hidden flex flex-col items-center justify-center text-center shadow-inner"
                                    >
                                        {previewImage || editingProject?.image ? (
                                            <div className="w-full h-full relative group">
                                                <img src={previewImage || editingProject.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                                    <Upload className="w-10 h-10 text-white animate-bounce" />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="space-y-4 p-8">
                                                <div className="w-20 h-20 bg-white rounded-[24px] flex items-center justify-center mx-auto shadow-xl group-hover:ring-4 group-hover:ring-blue-50 transition-all">
                                                    <ImageIcon className="w-8 h-8 text-blue-500" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Choose Image</p>
                                                    <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase">Click or drag an image here</p>
                                                </div>
                                            </div>
                                        )}
                                        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Official Title</label>
                                    <Input name="title" defaultValue={editingProject?.title} required className="h-16 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white focus:ring-[6px] focus:ring-blue-50 transition-all font-bold px-6 text-lg placeholder:text-slate-300" placeholder="e.g. Marina Heights Tower" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Engineering Category</label>
                                        <select name="category" defaultValue={editingProject?.category || services[0]?.id} className="w-full h-16 rounded-2xl border border-slate-100 bg-slate-50 px-6 text-[11px] font-[900] uppercase tracking-[0.2em] focus:bg-white focus:ring-[6px] focus:ring-blue-50 transition-all outline-none appearance-none cursor-pointer">
                                            {services.map(service => (
                                                <option key={service.id} value={service.id}>{service.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Infrastructure Type</label>
                                        <Input name="type" defaultValue={editingProject?.type} placeholder="Industrial, Residential, etc." className="h-16 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Physical Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                                        <Input name="location" defaultValue={editingProject?.location} className="h-16 pl-14 pr-6 rounded-2xl border-slate-100 bg-slate-50 font-bold" placeholder="City, Country" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Technical Scope & Details</label>
                                    <Textarea name="scope" defaultValue={editingProject?.scope} className="min-h-[160px] rounded-[24px] border-slate-100 bg-slate-50 p-8 font-medium leading-relaxed resize-none focus:bg-white focus:ring-[6px] focus:ring-blue-50 transition-all text-sm" placeholder="Define the engineering scope of work..." />
                                </div>
                            </div>
                            <DialogFooter className="pt-6 border-t border-slate-50">
                                <Button type="submit" className="w-full h-[72px] bg-blue-600 hover:bg-blue-700 text-white font-[900] uppercase tracking-[0.3em] text-[12px] rounded-[24px] transition-all shadow-2xl shadow-blue-200 active:scale-[0.98]">
                                    {editingProject ? "Save Changes" : "Publish Project"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Modern High-Function Search Bar */}
            <div className="relative group">
                <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
                    <Search className="w-6 h-6 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <Input
                    placeholder="SEARCH BY NAME, LOCATION OR CATEGORY..."
                    className="pl-20 h-[80px] rounded-[24px] border-none bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] focus:shadow-[0_40px_80px_rgba(0,0,0,0.08)] font-black text-[12px] uppercase tracking-[0.2em] text-slate-900 placeholder:text-slate-300 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Grid of Engineering Works */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.map((project) => (
                    <Card key={project.id} className="group overflow-hidden border-none shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-[32px] bg-white ring-1 ring-slate-100 hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-4">
                        <div className="h-[280px] relative overflow-hidden bg-slate-50 p-4">
                            <div className="w-full h-full rounded-[24px] overflow-hidden relative shadow-inner ring-1 ring-slate-200/50">
                                <img src={project.image} alt="" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            <div className="absolute top-8 left-8">
                                <div className="px-4 py-2 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-slate-100 flex items-center gap-2 group-hover:scale-105 transition-transform">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="absolute bottom-8 right-8 flex gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                <Button
                                    size="icon"
                                    className="w-14 h-14 bg-white text-slate-800 rounded-2xl shadow-2xl hover:bg-blue-600 hover:text-white transition-all transform hover:rotate-3 active:scale-90"
                                    onClick={() => {
                                        setEditingProject(project);
                                        setIsDialogOpen(true);
                                    }}
                                >
                                    <Edit2 className="w-6 h-6" />
                                </Button>
                                <Button
                                    size="icon"
                                    className="w-14 h-14 bg-[#141B2D] text-white rounded-2xl shadow-2xl hover:bg-rose-500 transition-all transform hover:-rotate-3 active:scale-90"
                                    onClick={() => handleDelete(project.id)}
                                >
                                    <Trash2 className="w-6 h-6" />
                                </Button>
                            </div>
                        </div>
                        <CardContent className="p-10 space-y-6">
                            <div className="space-y-3">
                                <h3 className="font-[900] text-2xl text-slate-900 leading-none truncate tracking-tight group-hover:text-blue-600 transition-colors uppercase">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-2 text-blue-500/50" />
                                        {project.location?.split(',')[0]}
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                    <div className="flex items-center">
                                        {project.type}
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed line-clamp-2">{project.scope}</p>
                            <div className="pt-8 flex items-center justify-between border-t border-slate-50 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                        <ArrowUpRight className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">View Reference</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-200" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-40 bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] ring-1 ring-slate-100">
                    <div className="w-32 h-32 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-10 border-4 border-white shadow-xl">
                        <Search className="w-12 h-12 text-slate-200" />
                    </div>
                    <h3 className="text-3xl font-[900] text-slate-900 uppercase tracking-tighter mb-4">No results detected</h3>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Try broader terms or reset filters</p>
                </div>
            )}
        </div>
    );
};

export default AdminProjects;
