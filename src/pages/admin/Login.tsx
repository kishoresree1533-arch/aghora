import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, ShieldCheck, Zap, ArrowRight, Shield } from "lucide-react";
import { toast } from "sonner";

import logo from "@/assets/logo.png";

const AdminLogin = () => {
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(password)) {
            toast.success("Login successful. Welcome back!", {
                style: { background: '#141B2D', color: '#fff', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }
            });
            navigate("/admin");
        } else {
            toast.error("Incorrect password.", {
                style: { background: '#ef4444', color: '#fff' }
            });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0F172A] p-6 relative overflow-hidden">
            {/* Cinematic Background Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px] animate-pulse transition-all duration-[4s]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="w-full max-w-[440px] relative z-10 animate-in fade-in zoom-in-95 duration-1000 ease-out">
                {/* Brand Identity Above Card */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <div className="flex flex-col items-center gap-2 mb-6">
                        <img
                            src={logo}
                            alt="Aghora Logo"
                            className="h-16 w-auto brightness-0 invert"
                        />
                        <span className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/40">Aghora Engineering Consultant</span>
                    </div>
                    <h1 className="text-3xl font-[950] text-white tracking-tight uppercase leading-none">Aghora Hub</h1>
                    <div className="flex items-center gap-3 mt-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Admin Login</p>
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                </div>

                <Card className="border-none shadow-[0_50px_100px_rgba(0,0,0,0.5)] rounded-[40px] overflow-hidden bg-white ring-1 ring-white/10">
                    <CardContent className="p-12 relative overflow-hidden">
                        {/* Glossy Overlay */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />

                        <div className="text-center mb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 text-slate-400 rounded-full text-[9px] font-black uppercase tracking-widest border border-slate-100 mb-6">
                                <Lock className="w-3 h-3" /> Admin access only
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Login</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-2">Password</label>
                                <div className="relative group">
                                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <Input
                                        type="password"
                                        placeholder="••••••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="h-16 pl-16 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white focus:ring-[8px] focus:ring-blue-50/50 transition-all font-black tracking-[0.4em] outline-none text-slate-900 shadow-inner placeholder:text-slate-200"
                                        required
                                    />
                                </div>
                            </div>

                            <Button type="submit" className="w-full h-20 bg-[#141B2D] hover:bg-slate-900 text-white font-[900] uppercase tracking-[0.3em] text-[12px] rounded-[24px] shadow-2xl shadow-blue-900/20 transition-all active:scale-[0.98] group flex items-center justify-center gap-4 border border-white/5 relative overflow-hidden">
                                <span className="relative z-10">Login</span>
                                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-2" />
                                {/* Button Shine Effect */}
                                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000" />
                            </Button>
                        </form>

                        <div className="mt-12 text-center pt-8 border-t border-slate-50">
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                                Aghora Engineering Hub © 2026 <br />
                                <span className="opacity-50">Control Panel</span>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminLogin;
