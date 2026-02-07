import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    Building2,
    Settings,
    Plus,
    ArrowRight,
    ChevronRight,
    Clock,
    LayoutGrid,
    Zap,
    Globe,
    MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getData, initialProjects, initialServices } from "@/lib/data-store";

const AdminDashboard = () => {
    const projects = getData("projects", initialProjects);
    const services = getData("services", initialServices);
    const navigate = useNavigate();

    const stats = [
        {
            label: "Total Projects",
            value: projects.length,
            status: "Live",
            icon: Building2,
            color: "from-blue-600 to-indigo-600",
            path: "/admin/projects",
            info: "Projects shown on your website."
        },
        {
            label: "Total Services",
            value: services.length,
            status: "Live",
            icon: Settings,
            color: "from-amber-500 to-orange-600",
            path: "/admin/services",
            info: "Services listed for clients."
        },
    ];

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-emerald-100 flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            System Active
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                        Welcome <span className="text-blue-600">Back</span>
                    </h1>
                    <p className="text-slate-500 font-medium text-lg mt-3">
                        Quickly update your projects and services here.
                    </p>
                </div>

                <Button
                    className="bg-[#141B2D] hover:bg-slate-800 text-white rounded-2xl px-8 h-14 font-bold text-sm shadow-xl shadow-slate-200 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-3 border border-white/10"
                    onClick={() => navigate("/admin/projects")}
                >
                    <Plus className="w-4 h-4" />
                    Add New Project
                </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                    <Card
                        key={i}
                        className="group relative overflow-hidden border-none shadow-[0_20px_40px_rgba(0,0,0,0.02)] cursor-pointer hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] rounded-[32px] transition-all duration-500 hover:-translate-y-1 bg-white ring-1 ring-slate-100"
                        onClick={() => navigate(stat.path)}
                    >
                        <CardContent className="p-10 relative z-10">
                            <div className="flex justify-between items-start mb-10">
                                <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.status}</span>
                                    <div className="flex items-center justify-end gap-1 mt-1 text-emerald-500">
                                        <div className="w-1 h-1 rounded-full bg-emerald-500" />
                                        <span className="text-[10px] font-black uppercase tracking-tighter">Active</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-5xl font-black text-slate-900 tracking-tighter">{stat.value}</h3>
                                <div>
                                    <p className="text-lg font-bold text-slate-800 tracking-tight">{stat.label}</p>
                                    <p className="text-slate-400 text-sm mt-1 font-medium leading-relaxed">{stat.info}</p>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                                <span className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Manage <ChevronRight className="w-4 h-4" />
                                </span>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(x => <div key={x} className="w-8 h-8 rounded-full border-2 border-white bg-slate-50" />)}
                                </div>
                            </div>
                        </CardContent>
                        {/* Decorative Gradient */}
                        <div className={`absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br ${stat.color} opacity-[0.03] group-hover:opacity-10 rounded-full blur-[60px] transition-opacity duration-700`} />
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Recent Projects */}
                <Card className="lg:col-span-3 border-none shadow-[0_20px_40px_rgba(0,0,0,0.02)] rounded-[32px] overflow-hidden bg-white ring-1 ring-slate-100">
                    <CardHeader className="p-10 pb-6 border-b border-slate-50">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl font-black text-slate-800">Recent Projects</CardTitle>
                                    <CardDescription className="font-bold text-slate-400 text-sm">Last projects added to the site</CardDescription>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                className="text-xs font-bold px-5 h-10 rounded-xl border-slate-200 hover:bg-slate-50 transition-all"
                                onClick={() => navigate("/admin/projects")}
                            >
                                View All
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-50">
                            {projects.slice(-3).reverse().map((project: any) => (
                                <div key={project.id} className="flex items-center gap-6 p-8 hover:bg-slate-50/50 transition-all group cursor-pointer">
                                    <div className="w-20 h-20 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500">
                                        {project.image ? (
                                            <img src={project.image} alt="" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                <Building2 className="w-8 h-8" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded border border-blue-100">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate tracking-tight">{project.title}</h4>
                                        <p className="text-sm text-slate-400 font-medium truncate">{project.location}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-blue-600 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Links */}
                <Card className="lg:col-span-2 border-none shadow-[0_20px_40px_rgba(0,0,0,0.02)] rounded-[32px] overflow-hidden bg-[#141B2D] text-white">
                    <CardHeader className="p-10 pb-6 border-b border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-amber-500 backdrop-blur-sm shadow-inner border border-white/5">
                                <LayoutGrid className="w-6 h-6" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-black text-white">Our Services</CardTitle>
                                <CardDescription className="text-slate-400 font-bold text-sm">Update your services</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="space-y-3">
                            {services.slice(0, 4).map((service: any) => (
                                <div
                                    key={service.id}
                                    className="flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer group"
                                    onClick={() => navigate("/admin/services")}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                        <p className="text-xs font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">{service.title}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[24px] text-white shadow-2xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-lg font-black mb-2">Need help?</h4>
                                <p className="text-sm font-medium text-white/70 leading-relaxed mb-6">Contact our team for help with any technical issues.</p>
                                <Button className="w-full bg-white text-blue-700 hover:bg-slate-50 font-black h-12 rounded-xl transition-all shadow-lg active:scale-95">
                                    Contact Support
                                </Button>
                            </div>
                            {/* Polish */}
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl transition-transform duration-1000 group-hover:scale-150" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;
