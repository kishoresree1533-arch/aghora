import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { useEffect, useState } from "react";
import {
    Home,
    Layers,
    Wrench,
    LogOut,
    X,
    Menu,
    Bell,
    Search,
    ChevronRight,
    Monitor,
    Settings,
    HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AdminLayout = () => {
    const { isAuthenticated, isLoading, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate("/admin/login");
        }
    }, [isAuthenticated, isLoading, navigate]);

    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold text-xs">A</div>
            </div>
        </div>
    );

    if (!isAuthenticated) return null;

    const navItems = [
        { label: "Overview", path: "/admin", icon: Home },
        { label: "Projects", path: "/admin/projects", icon: Layers },
        { label: "Services", path: "/admin/services", icon: Wrench },
    ];

    const handleLogout = () => {
        logout();
        toast.success("Logged out successfully.");
        navigate("/admin/login");
    };

    return (
        <div className="flex min-h-screen bg-[#FDFDFF] font-sans selection:bg-blue-100 selection:text-blue-700">
            {/* Premium Sidebar */}
            <aside
                className={`${isSidebarOpen ? "w-[280px]" : "w-0 lg:w-[88px]"
                    } bg-[#141B2D] text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col z-50 sticky top-0 h-screen overflow-y-auto no-scrollbar shadow-[20px_0_60px_-15px_rgba(0,0,0,0.1)]`}
            >
                {/* Sidebar Brand Logo */}
                <div className="p-8 pb-10">
                    <Link to="/" className="flex items-center gap-4 group">
                        <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[14px] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30 group-hover:rotate-[10deg] transition-transform duration-500">
                            <span className="font-black text-white text-xl">A</span>
                        </div>
                        {isSidebarOpen && (
                            <div className="flex flex-col">
                                <span className="font-black text-[15px] tracking-[0.1em] uppercase leading-none text-white whitespace-nowrap">Aghora Hub</span>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase leading-none mt-1.5 opacity-80">Admin Center</span>
                            </div>
                        )}
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-grow px-5 space-y-2">
                    {isSidebarOpen && (
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 pl-4 opacity-50">
                            Navigation
                        </p>
                    )}
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-4 px-4 h-14 rounded-2xl transition-all duration-300 relative group overflow-hidden ${isActive
                                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20"
                                    : "text-slate-400 hover:text-white hover:bg-white/5 active:scale-95"
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute left-0 top-0 w-1.5 h-full bg-white rounded-r-full" />
                                )}
                                <item.icon className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-white" : "group-hover:text-blue-400 group-hover:scale-110"}`} />
                                {isSidebarOpen && (
                                    <span className={`text-[13px] font-bold tracking-wide transition-all duration-300 ${isActive ? "ml-1" : ""}`}>
                                        {item.label}
                                    </span>
                                )}
                                {isActive && isSidebarOpen && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Sidebar Footer */}
                <div className="p-6 mt-auto">
                    {isSidebarOpen && (
                        <div className="mb-8 p-6 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-2xl border border-white/5 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-3">
                                <HelpCircle className="w-4 h-4 text-blue-400" />
                                <span className="text-[11px] font-black text-blue-300 uppercase tracking-widest">Support</span>
                            </div>
                            <p className="text-[11px] text-slate-400 font-medium leading-relaxed">Contact us for any help with the dashboard.</p>
                        </div>
                    )}
                    <Button
                        onClick={handleLogout}
                        variant="ghost"
                        className={`w-full h-14 rounded-2xl flex items-center ${isSidebarOpen ? "justify-start px-4 gap-4" : "justify-center"} text-slate-500 hover:text-white hover:bg-rose-500/10 hover:border-rose-500/20 group transition-all duration-500`}
                    >
                        <LogOut className="w-5 h-5 group-hover:text-rose-400 transition-colors" />
                        {isSidebarOpen && <span className="text-sm font-bold tracking-wide">Logout</span>}
                    </Button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col min-w-0 overflow-hidden relative">
                {/* Glow Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none" />

                <header className="h-[88px] bg-white/70 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-40 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-3 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition-all active:scale-95 shrink-0"
                        >
                            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                        <div className="hidden md:flex items-center gap-4 px-5 h-12 bg-slate-50 border border-slate-100 rounded-[14px] w-80 group focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-300">
                            <Search className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search resources..."
                                className="bg-transparent border-none text-sm font-medium text-slate-600 outline-none w-full placeholder:text-slate-300"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link to="/" target="_blank" className="hidden lg:flex items-center gap-3 text-slate-500 hover:text-blue-600 text-xs font-black uppercase tracking-[0.2em] transition-all px-4 py-2 hover:bg-blue-50 rounded-lg">
                            <Monitor className="w-4 h-4" />
                            Live Site
                        </Link>

                        <button className="relative p-3 text-slate-300 hover:text-blue-600 bg-slate-50 rounded-xl transition-all hover:bg-blue-50 active:scale-90">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white" />
                        </button>

                        <div className="flex items-center gap-4 pl-6 border-l border-slate-100">
                            <div className="text-right hidden xs:block">
                                <p className="text-sm font-black text-slate-800 tracking-tight uppercase leading-none mb-1.5">Hub Admin</p>
                                <div className="flex items-center justify-end gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Status: Active</p>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-[14px] bg-slate-900 shadow-xl shadow-slate-200 border border-white p-[2px] cursor-pointer hover:rotate-3 transition-transform">
                                <div className="w-full h-full rounded-[12px] bg-gradient-to-tr from-slate-800 to-slate-900 flex items-center justify-center font-black text-white text-[15px]">
                                    AD
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-10 lg:p-14 max-w-[1500px] mx-auto w-full flex-grow relative">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
