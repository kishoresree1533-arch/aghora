import { useState, useEffect, useRef } from "react";
import { getData, saveData, initialServices, syncServices } from "@/lib/data-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
    Plus,
    Trash2,
    Edit2,
    Settings,
    Upload,
    ArrowRight,
    ShieldCheck,
    CheckCircle2,
    Cpu,
    Zap,
    ChevronRight,
    X,
    Layers,
    Sparkles
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

const AdminServices = () => {
    const [services, setServices] = useState<any[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingService, setEditingService] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const loadData = async () => {
            const servicesData = await syncServices();
            setServices(servicesData);
        };
        loadData();
    }, []);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                toast.error("File limit exceeded (2MB max)");
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

        const imageToSave = previewImage || editingService?.image || "/src/assets/hvac-engineering-latest.jpg";

        const capabilitiesInput = formData.get("capabilities")?.toString() || "";
        const capabilitiesArray = capabilitiesInput
            .split("\n")
            .map(cap => cap.trim())
            .filter(cap => cap !== "");

        const serviceData = {
            id: editingService ? editingService.id : formData.get("title")?.toString().toLowerCase().replace(/\s+/g, '-'),
            title: formData.get("title"),
            subtitle: formData.get("subtitle") || "Engineering Discipline",
            description: formData.get("description"),
            icon: editingService?.icon || "Settings",
            image: imageToSave,
            capabilities: capabilitiesArray.length > 0 ? capabilitiesArray : ["Consultancy", "Engineering Design", "Field Implementation", "Testing & Commissioning"]
        };

        try {
            const method = editingService ? 'PUT' : 'POST';
            const res = await fetch('/server/services.php', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(serviceData)
            });
            const result = await res.json();

            if (result.success) {
                let updatedServices;
                if (editingService) {
                    updatedServices = services.map(s => s.id === editingService.id ? serviceData : s);
                    toast.success("Service architecture updated");
                } else {
                    updatedServices = [...services, serviceData];
                    toast.success("New discipline integrated");
                }

                setServices(updatedServices);
                saveData("services", updatedServices);
                setIsDialogOpen(false);
                setEditingService(null);
                setPreviewImage(null);
            }
        } catch (error) {
            toast.error("Failed to save to server");
        }
    };

    const handleDelete = async (id: string) => {
        if (confirm("Decommission this service? This will remove all associated capabilities from the live site.")) {
            try {
                const res = await fetch(`/server/services.php?id=${id}`, { method: 'DELETE' });
                const result = await res.json();
                if (result.success) {
                    const updatedServices = services.filter(s => s.id !== id);
                    setServices(updatedServices);
                    saveData("services", updatedServices);
                    toast.error("Discipline decommissioned");
                }
            } catch (error) {
                toast.error("Delete failed");
            }
        }
    };

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Premium Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-1 bg-amber-500 rounded-full" />
                        <span className="text-[11px] font-black text-amber-600 uppercase tracking-[0.4em]">Manage Services</span>
                    </div>
                    <h1 className="text-[48px] font-[950] text-slate-900 leading-none tracking-tight uppercase">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900 opacity-60">Services</span></h1>
                    <p className="text-slate-400 font-bold text-sm mt-6 uppercase tracking-[0.1em] max-w-2xl leading-relaxed">Update your list of engineering services here.</p>
                </div>

                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if (!open) {
                        setEditingService(null);
                        setPreviewImage(null);
                    }
                }}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#141B2D] hover:bg-slate-900 text-white rounded-[24px] px-10 h-[72px] font-[900] uppercase tracking-[0.2em] text-[12px] shadow-2xl shadow-slate-300 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-5 border border-white/5">
                            <div className="p-2 bg-amber-500 rounded-xl shadow-lg shadow-amber-500/20">
                                <Plus className="w-5 h-5 text-white" />
                            </div>
                            Add New Service
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px] p-0 rounded-[40px] border-none shadow-[0_50px_100px_rgba(0,0,0,0.15)] bg-white overflow-hidden scrollbar-hide">
                        <DialogHeader className="px-12 pt-12 pb-10 bg-[#141B2D] text-white relative">
                            <div className="flex items-center gap-6 relative z-10">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-[22px] flex items-center justify-center border border-white/10">
                                    <Sparkles className="w-8 h-8 text-amber-400" />
                                </div>
                                <div>
                                    <DialogTitle className="text-3xl font-[900] tracking-tight uppercase">
                                        {editingService ? "Edit Service" : "Add New Service"}
                                    </DialogTitle>
                                    <DialogDescription className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-2">
                                        Fill in the details below
                                    </DialogDescription>
                                </div>
                            </div>
                            {/* Abstract Header Blur */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]" />
                        </DialogHeader>
                        <form onSubmit={handleSave} className="px-12 py-12 space-y-10 overflow-y-auto max-h-[65vh]">
                            <div className="grid gap-10">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-amber-500" /> Showcase Background Visual
                                    </label>
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        className="group relative h-[240px] bg-slate-50 rounded-[32px] border-[3px] border-dashed border-slate-100 hover:border-amber-500 hover:bg-white transition-all duration-500 cursor-pointer overflow-hidden flex flex-col items-center justify-center shadow-inner"
                                    >
                                        {previewImage || editingService?.image ? (
                                            <div className="w-full h-full relative group">
                                                <img src={previewImage || editingService.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-amber-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                                    <Upload className="w-12 h-12 text-white animate-pulse" />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center p-8 space-y-4">
                                                <div className="w-20 h-20 bg-white rounded-[28px] flex items-center justify-center mx-auto shadow-xl ring-1 ring-slate-100 group-hover:scale-110 transition-transform">
                                                    <Upload className="w-8 h-8 text-amber-500" />
                                                </div>
                                                <p className="text-xs font-black uppercase tracking-widest text-slate-400">CHOOSE SERVICE IMAGE (HD)</p>
                                            </div>
                                        )}
                                        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">Service Name</label>
                                        <Input name="title" defaultValue={editingService?.title} required className="h-16 rounded-[22px] border-slate-100 bg-slate-50 px-8 font-black uppercase tracking-wider text-sm focus:bg-white focus:ring-[8px] focus:ring-amber-50 transition-all shadow-inner" placeholder="e.g. HVAC SYSTEMS" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">Short Subtitle</label>
                                        <Input name="subtitle" defaultValue={editingService?.subtitle} placeholder="e.g. Climate Excellence" className="h-16 rounded-[22px] border-slate-100 bg-slate-50 px-8 font-bold" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">Description</label>
                                    <Textarea name="description" defaultValue={editingService?.description} className="min-h-[140px] rounded-[32px] border-slate-100 bg-slate-50 p-8 font-medium leading-relaxed resize-none focus:bg-white focus:ring-[8px] focus:ring-amber-50 transition-all text-sm shadow-inner" placeholder="Write a short description of this service..." />
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">Key Capabilities (One per line)</label>
                                    <Textarea
                                        name="capabilities"
                                        defaultValue={editingService?.capabilities?.join("\n")}
                                        className="min-h-[140px] rounded-[32px] border-slate-100 bg-slate-50 p-8 font-medium leading-relaxed resize-none focus:bg-white focus:ring-[8px] focus:ring-amber-50 transition-all text-sm shadow-inner"
                                        placeholder="Engineering Design&#10;System Implementation&#10;Testing & Commissioning"
                                    />
                                </div>
                            </div>
                            <DialogFooter className="pt-8 border-t border-slate-50 flex gap-4">
                                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="h-[72px] flex-1 rounded-[24px] border-2 border-slate-100 font-black uppercase tracking-widest text-[11px] text-slate-400">
                                    Cancel
                                </Button>
                                <Button type="submit" className="h-[72px] flex-[2] bg-amber-600 hover:bg-amber-700 text-white font-[900] uppercase tracking-[0.3em] text-[12px] rounded-[24px] shadow-2xl shadow-amber-200 active:scale-[0.98] transition-all">
                                    {editingService ? "Save Changes" : "Add Service"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Grid of Engineering Disciplines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {services.map((service) => (
                    <Card key={service.id} className="group overflow-hidden border-none shadow-[0_30px_60px_rgba(0,0,0,0.03)] rounded-[40px] bg-white ring-1 ring-slate-100 hover:shadow-[0_60px_100px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-4">
                        <div className="h-[260px] relative bg-slate-100 flex items-center justify-center p-8">
                            {service.image && (
                                <img src={service.image} className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-[2s] group-hover:scale-110" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-100" />

                            <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                <div className="w-24 h-24 rounded-[32px] bg-[#141B2D] text-white flex items-center justify-center shadow-2xl shadow-slate-900/20 ring-4 ring-white group-hover:rotate-12 transition-transform duration-500">
                                    <Cpu className="w-10 h-10 text-amber-500" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-[950] text-slate-900 tracking-tight uppercase leading-none">{service.title}</h3>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="w-6 h-0.5 bg-amber-500 rounded-full" />
                                        <p className="text-amber-600 text-[10px] font-black uppercase tracking-[0.3em]">{service.subtitle || "Field Specialist"}</p>
                                        <span className="w-6 h-0.5 bg-amber-500 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons Floating */}
                            <div className="absolute top-10 right-10 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                <Button
                                    size="icon"
                                    className="w-14 h-14 rounded-2xl bg-white shadow-2xl shadow-black/10 text-slate-900 hover:text-white hover:bg-blue-600 transition-all transform hover:rotate-3 active:scale-90 border border-slate-50"
                                    onClick={() => {
                                        setEditingService(service);
                                        setIsDialogOpen(true);
                                    }}
                                >
                                    <Edit2 className="w-6 h-6" />
                                </Button>
                                <Button
                                    size="icon"
                                    className="w-14 h-14 rounded-2xl bg-[#141B2D] shadow-2xl shadow-black/10 text-white hover:bg-rose-500 transition-all transform hover:-rotate-3 active:scale-90 border border-white/5"
                                    onClick={() => handleDelete(service.id)}
                                >
                                    <Trash2 className="w-6 h-6" />
                                </Button>
                            </div>
                        </div>

                        <CardContent className="p-12 space-y-10 bg-white relative">
                            <div className="relative">
                                <div className="absolute -left-6 top-0 w-1.5 h-full bg-amber-500/20 rounded-full" />
                                <p className="text-slate-400 font-bold leading-relaxed italic text-lg px-2 line-clamp-3">"{service.description}"</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                                    <span className="text-[11px] font-[900] uppercase tracking-[0.4em] text-slate-300">Technical Capacities</span>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {(service.capabilities || []).map((cap: string, i: number) => (
                                        <div key={i} className="group/tag flex items-center gap-3 pr-5 pl-2 py-2 bg-slate-50 text-slate-500 text-[11px] font-black uppercase tracking-widest rounded-xl border border-slate-100 group-hover:border-amber-200 transition-all hover:bg-white hover:shadow-lg hover:shadow-slate-100">
                                            <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover/tag:bg-amber-500 transition-colors">
                                                <Zap className="w-3 h-3 text-amber-500 group-hover/tag:text-white" />
                                            </div>
                                            {cap}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                    <span className="text-[10px] font-[900] uppercase tracking-widest text-slate-300">Live Status Active</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-slate-100" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AdminServices;
