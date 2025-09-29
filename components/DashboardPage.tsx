import React, { useState } from 'react';
import { LogoIcon } from './icons/LogoIcon';
import { HomeIcon } from './icons/HomeIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { UsersIcon } from './icons/UsersIcon';
import { CogIcon } from './icons/CogIcon';
import { LogoutIcon } from './icons/LogoutIcon';
import { UserCircleIcon } from './icons/UserCircleIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { CreditCardIcon } from './icons/CreditCardIcon';
import { CashIcon } from './icons/CashIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { ExclamationIcon } from './icons/ExclamationIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { XCircleIcon } from './icons/XCircleIcon';
import { PencilIcon } from './icons/PencilIcon';
import ProfilePage from './ProfilePage';

export type UserRole = 'Siswa' | 'Pengajar' | 'Pengurus' | 'Admin' | 'Wali Santri';
export const ALL_ROLES: UserRole[] = ['Siswa', 'Wali Santri', 'Pengajar', 'Pengurus', 'Admin'];

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}
interface DashboardPageProps {
  user: {
    name: string;
    role: UserRole;
  };
  onLogout: () => void;
}

const NavLink: React.FC<{ icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }> = ({ icon, label, active, onClick }) => (
    <a href="#" onClick={onClick} className={`flex items-center px-4 py-3 text-lg rounded-lg transition-colors duration-200 ${
        active 
        ? 'bg-emerald-700 text-white font-semibold' 
        : 'text-emerald-100 hover:bg-emerald-700/80 hover:text-white'
    }`}>
        {icon}
        <span className="ml-4">{label}</span>
    </a>
)

const RoleStatCard: React.FC<{ title: string; value: string; icon: React.ReactNode; }> = ({ title, value, icon }) => (
    <div className="bg-white p-5 rounded-lg shadow-md flex items-center space-x-4">
        <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">{icon}</div>
        <div>
            <p className="text-gray-500 text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);


// --- Role-specific Dashboard Content Components ---

const SiswaDashboard: React.FC<{ userName: string; onNavigateToProfile: () => void; }> = ({ userName, onNavigateToProfile }) => (
    <>
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">Welcome back, {userName}!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-4 text-gray-700">Continue Learning</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <img src="https://picsum.photos/400/300?random=20" className="w-20 h-16 object-cover rounded-md" alt="Course thumbnail"/>
                        <div>
                            <h4 className="font-semibold text-emerald-800">Fiqih Modern</h4>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1"><div className="bg-emerald-600 h-2.5 rounded-full" style={{width: '75%'}}></div></div>
                            <p className="text-sm text-gray-500 mt-1">75% Complete</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src="https://picsum.photos/400/300?random=21" className="w-20 h-16 object-cover rounded-md" alt="Course thumbnail"/>
                        <div>
                            <h4 className="font-semibold text-emerald-800">Digital Marketing Syariah</h4>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1"><div className="bg-emerald-600 h-2.5 rounded-full" style={{width: '30%'}}></div></div>
                            <p className="text-sm text-gray-500 mt-1">30% Complete</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-4 text-gray-700">Recent Achievements</h3>
                <div className="flex items-center bg-amber-50 p-4 rounded-lg">
                    <div className="text-amber-500"><ShieldCheckIcon className="h-12 w-12"/></div>
                    <div className="ml-4">
                        <p className="font-semibold text-amber-800">Certificate of Completion</p>
                        <p className="text-sm text-amber-700">Tahsin Al-Quran Online</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-4 text-gray-700">My Profile</h3>
                <div className="flex items-center"><UserCircleIcon className="w-16 h-16 text-gray-400 mr-4"/>
                    <div>
                        <p className="font-semibold text-xl text-gray-800">{userName}</p>
                        <p className="text-gray-500">2 Courses Enrolled</p>
                    </div>
                </div>
                <button onClick={onNavigateToProfile} className="mt-4 w-full text-center bg-emerald-100 text-emerald-800 font-semibold py-2 px-4 rounded-lg hover:bg-emerald-200 transition-colors duration-300">Edit Profile</button>
            </div>
             <div className="bg-white p-6 rounded-lg shadow lg:col-span-3">
                <h3 className="font-bold text-xl mb-4 text-gray-700 flex items-center">
                    <ShoppingCartIcon className="w-6 h-6 mr-3 text-emerald-500" /> 
                    My Orders
                </h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="p-3 font-semibold text-gray-600">Order ID</th>
                                <th className="p-3 font-semibold text-gray-600">Date</th>
                                <th className="p-3 font-semibold text-gray-600">Total</th>
                                <th className="p-3 font-semibold text-gray-600">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-gray-50">
                                <td className="p-3 text-sm text-gray-600 font-mono">#12845</td>
                                <td className="p-3 text-sm text-gray-600">July 10, 2024</td>
                                <td className="p-3 font-semibold text-gray-800">Rp 250.000</td>
                                <td className="p-3"><span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Completed</span></td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                                <td className="p-3 text-sm text-gray-600 font-mono">#12801</td>
                                <td className="p-3 text-sm text-gray-600">June 28, 2024</td>
                                <td className="p-3 font-semibold text-gray-800">Rp 120.000</td>
                                <td className="p-3"><span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Completed</span></td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="p-3 text-sm text-gray-600 font-mono">#12755</td>
                                <td className="p-3 text-sm text-gray-600">June 15, 2024</td>
                                <td className="p-3 font-semibold text-gray-800">Rp 25.000</td>
                                <td className="p-3"><span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Cancelled</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
);

const WaliSantriDashboard: React.FC<{ userName: string }> = ({ userName }) => (
    <>
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">Guardian Dashboard</h2>
        <p className="text-lg text-gray-600 mb-6">Viewing information for: <span className="font-semibold">Santri Digital</span></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
                <h3 className="font-bold text-xl mb-4 text-gray-700">Progress Akademik Anak</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <img src="https://picsum.photos/400/300?random=20" className="w-20 h-16 object-cover rounded-md" alt="Course thumbnail"/>
                        <div>
                            <h4 className="font-semibold text-emerald-800">Fiqih Modern</h4>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1"><div className="bg-emerald-600 h-2.5 rounded-full" style={{width: '75%'}}></div></div>
                            <p className="text-sm text-gray-500 mt-1">Progress: 75%</p>
                        </div>
                    </div>
                     <div className="flex items-center space-x-4">
                        <img src="https://picsum.photos/400/300?random=22" className="w-20 h-16 object-cover rounded-md" alt="Course thumbnail"/>
                        <div>
                            <h4 className="font-semibold text-emerald-800">Tahsin Al-Quran Online</h4>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1"><div className="bg-emerald-600 h-2.5 rounded-full" style={{width: '100%'}}></div></div>
                            <p className="text-sm text-gray-500 mt-1">Completed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-4 text-gray-700">Status Keuangan</h3>
                <div className="space-y-4">
                    <div className="bg-emerald-50 text-emerald-800 p-4 rounded-lg">
                        <p className="font-semibold">Pembayaran SPP - Juni 2024</p>
                        <p className="text-lg font-bold">LUNAS</p>
                    </div>
                     <div className="bg-amber-50 text-amber-800 p-4 rounded-lg">
                        <p className="font-semibold">Biaya Kegiatan Tahunan</p>
                        <p className="text-lg font-bold">Menunggu Pembayaran</p>
                    </div>
                </div>
                 <button className="mt-4 w-full text-center bg-amber-400 text-emerald-900 font-semibold py-2 px-4 rounded-lg hover:bg-amber-500 transition-colors duration-300">Lihat Tagihan</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow lg:col-span-3">
                <h3 className="font-bold text-xl mb-4 text-gray-700">Pengumuman</h3>
                <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold">Jadwal Ujian Akhir Semester</h4>
                    <p className="text-sm text-gray-600">Ujian akan dilaksanakan pada tanggal 15-20 Juli 2024. Mohon para santri untuk mempersiapkan diri.</p>
                </div>
            </div>
        </div>
    </>
);

const PengajarDashboard: React.FC<{ userName: string }> = ({ userName }) => (
    <>
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">Course Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <RoleStatCard title="Active Courses" value="2" icon={<BookOpenIcon className="w-7 h-7"/>} />
            <RoleStatCard title="Total Students" value="148" icon={<UsersIcon className="w-7 h-7"/>} />
            <RoleStatCard title="Pending Reviews" value="5" icon={<ExclamationIcon className="w-7 h-7"/>} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-4 text-gray-700">Managed Courses</h3>
                <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                        <div>
                            <p className="font-semibold text-gray-800">Fiqih Modern</p>
                            <p className="text-sm text-gray-500">89 Students</p>
                        </div>
                        <div className="space-x-2">
                            <button className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md hover:bg-emerald-200">Manage</button>
                            <button className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300">Analytics</button>
                        </div>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                         <div>
                            <p className="font-semibold text-gray-800">Sirah Nabawiyah</p>
                            <p className="text-sm text-gray-500">59 Students</p>
                        </div>
                        <div className="space-x-2">
                             <button className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md hover:bg-emerald-200">Manage</button>
                            <button className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300">Analytics</button>
                        </div>
                    </li>
                </ul>
                <button className="mt-4 w-full text-center bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-emerald-700 transition-colors">Create New Course</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-4 text-gray-700">Recent Student Activity</h3>
                 <div className="space-y-3">
                    <div className="text-sm border-l-4 border-amber-400 pl-3">
                        <p className="font-medium text-gray-700">Ahmad Fauzi submitted an assignment in <span className="font-semibold">Fiqih Modern</span>.</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                    <div className="text-sm border-l-4 border-sky-400 pl-3">
                        <p className="font-medium text-gray-700">New question posted in <span className="font-semibold">Sirah Nabawiyah</span> Q&A.</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                 </div>
            </div>
        </div>
    </>
);

const PengurusDashboard: React.FC<{ userName: string }> = ({ userName }) => (
    <>
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">Management Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
             <RoleStatCard title="Total Santri" value="1,250" icon={<UsersIcon className="w-7 h-7"/>} />
             <RoleStatCard title="Total Pengajar" value="45" icon={<BriefcaseIcon className="w-7 h-7"/>} />
             <RoleStatCard title="Monthly Revenue" value="Rp 25jt" icon={<CashIcon className="w-7 h-7"/>} />
             <RoleStatCard title="Course Enrollment" value="2,180" icon={<BookOpenIcon className="w-7 h-7"/>} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
                <h3 className="font-bold text-xl mb-4 text-gray-700">Financial Summary</h3>
                <div className="h-64 bg-gray-100 flex items-center justify-center rounded-md">
                    <p className="text-gray-500">Financial Chart Placeholder</p>
                </div>
            </div>
             <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-xl mb-4 text-gray-700">Recent Enrollments</h3>
                <ul className="space-y-3">
                    <li className="text-sm">
                        <p className="text-gray-700"><span className="font-semibold">Ahmad Fauzi</span> enrolled in <span className="font-semibold text-emerald-700">Fiqih Modern</span>.</p>
                    </li>
                    <li className="text-sm">
                         <p className="text-gray-700"><span className="font-semibold">Siti Aisyah</span> enrolled in <span className="font-semibold text-emerald-700">Digital Marketing Syariah</span>.</p>
                    </li>
                     <li className="text-sm">
                         <p className="text-gray-700"><span className="font-semibold">Budi Santoso</span> enrolled in <span className="font-semibold text-emerald-700">Tahsin Al-Quran Online</span>.</p>
                    </li>
                </ul>
            </div>
        </div>
    </>
);


// --- Admin Panel Components ---
interface AdminCourse {
  id: number;
  title: string;
  instructorName: string;
  price: number; // 0 for free
  status: 'Pending' | 'Approved' | 'Rejected';
}


const EditCourseModal: React.FC<{
    course: AdminCourse;
    onClose: () => void;
    onSave: (updatedCourse: AdminCourse) => void;
}> = ({ course, onClose, onSave }) => {
    const [formData, setFormData] = useState(course);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'price' ? Number(value) : value }));
    };

    const handleSave = () => {
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
                <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold text-gray-800">Edit Course Details</h3>
                    <p className="text-gray-500">Editing: <span className="font-medium">{course.title}</span></p>
                </div>
                <div className="p-6 space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Course Title</label>
                        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                     <div>
                        <label htmlFor="instructorName" className="block text-sm font-medium text-gray-700">Instructor Name</label>
                        <input type="text" name="instructorName" id="instructorName" value={formData.instructorName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (0 for Free)</label>
                        <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                </div>
                <div className="p-4 bg-gray-50 flex justify-end space-x-3 rounded-b-lg">
                    <button onClick={onClose} className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Cancel</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">Save Changes</button>
                </div>
            </div>
        </div>
    );
};


const UserRoleModal: React.FC<{ 
    user: User; 
    currentUser: User;
    onClose: () => void; 
    onSave: (userId: number, newRole: UserRole) => void;
    onLogout: () => void;
}> = ({ user, currentUser, onClose, onSave, onLogout }) => {
    const [selectedRole, setSelectedRole] = useState<UserRole>(user.role);
    
    const isEditingSelf = user.id === currentUser.id;
    const isLosingAdminRights = isEditingSelf && selectedRole !== 'Admin';

    const handleSaveChanges = () => {
        onSave(user.id, selectedRole);
        if (isLosingAdminRights) {
            onLogout();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold text-gray-800">Edit User Role</h3>
                    <p className="text-gray-500">Editing role for <span className="font-medium">{user.name}</span></p>
                </div>
                <div className="p-6 space-y-4">
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <select
                          id="role"
                          value={selectedRole}
                          onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          {ALL_ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                    {isLosingAdminRights && (
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 flex items-start space-x-3">
                           <ExclamationIcon className="h-6 w-6 text-amber-500 flex-shrink-0"/>
                           <div>
                            <h4 className="font-semibold text-amber-800">Warning</h4>
                            <p className="text-sm text-amber-700">Changing your own role from Admin will cause you to lose access and be logged out immediately. Are you sure you want to proceed?</p>
                           </div>
                        </div>
                    )}
                </div>
                <div className="p-4 bg-gray-50 flex justify-end space-x-3 rounded-b-lg">
                    <button onClick={onClose} className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Cancel</button>
                    <button 
                        onClick={handleSaveChanges} 
                        className={`px-4 py-2 text-white rounded-md ${isLosingAdminRights ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}
                    >
                        {isLosingAdminRights ? 'Change & Logout' : 'Save Changes'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode; }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4">
        <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full">{icon}</div>
        <div>
            <p className="text-gray-500 text-sm font-medium">{title}</p>
            <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);

const AdminDashboard: React.FC<{ userName: string; onLogout: () => void }> = ({ userName, onLogout }) => {
    type Tab = 'overview' | 'users' | 'content' | 'marketplace' | 'courses';
    const [activeTab, setActiveTab] = useState<Tab>('overview');
    
    const initialUsers: User[] = [
        { id: 1, name: 'Santri Digital', email: 'santri@digital.com', role: 'Siswa' },
        { id: 2, name: 'Wali Santri', email: 'wali@digital.com', role: 'Wali Santri' },
        { id: 3, name: 'Ustadz Abdullah', email: 'abdullah@digital.com', role: 'Pengajar' },
        { id: 4, name: 'Admin User', email: 'admin@digital.com', role: 'Admin' },
        { id: 5, name: 'Siti Aminah', email: 'siti@umkm.com', role: 'Pengurus' },
    ];
    
    const currentUser: User = { id: 4, name: 'Admin User', email: 'admin@digital.com', role: 'Admin' };

    const [users, setUsers] = useState<User[]>(initialUsers);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
    
    // State for Course Management
    const initialAdminCourses: AdminCourse[] = [
        { id: 1, title: 'Fiqih Modern Lanjutan', instructorName: 'Ustadz Abdullah', price: 350000, status: 'Approved' },
        { id: 2, title: 'Fiqih Modern', instructorName: 'Ustadz Abdullah', price: 250000, status: 'Approved' },
        { id: 3, title: 'Digital Marketing Syariah', instructorName: 'Hasan Basri', price: 175000, status: 'Pending' },
        { id: 4, title: 'Tahsin Al-Quran Online', instructorName: 'Qori Ahmad Zaki', price: 0, status: 'Approved' },
        { id: 5, title: 'Dasar-dasar Pemrograman', instructorName: 'Fatima Azzahra', price: 0, status: 'Rejected' },
        { id: 6, title: 'Advanced Islamic Finance', instructorName: 'Ustadz Abdullah', price: 450000, status: 'Pending' },
    ];
    const [courses, setCourses] = useState<AdminCourse[]>(initialAdminCourses);
    const [isEditCourseModalOpen, setIsEditCourseModalOpen] = useState(false);
    const [editingCourse, setEditingCourse] = useState<AdminCourse | null>(null);

    const handleEditUser = (user: User) => {
        setSelectedUser(user);
        setIsRoleModalOpen(true);
    };
    const handleRoleChange = (userId: number, newRole: UserRole) => {
        setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
        setIsRoleModalOpen(false);
    };
    
    const handleCourseStatusChange = (courseId: number, status: 'Approved' | 'Rejected') => {
        setCourses(courses.map(c => c.id === courseId ? { ...c, status } : c));
    };

    const handleEditCourse = (course: AdminCourse) => {
        setEditingCourse(course);
        setIsEditCourseModalOpen(true);
    };
    
    const handleSaveCourse = (updatedCourse: AdminCourse) => {
        setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
        setIsEditCourseModalOpen(false);
        setEditingCourse(null);
    };
    
    const reportedContent = [
        { id: 1, user: 'User123', content: 'This comment contains inappropriate language.', reason: 'Hate Speech', date: '2024-07-15' },
        { id: 2, user: 'SantriKritis', content: 'The information in this forum post is misleading.', reason: 'Misinformation', date: '2024-07-14' },
    ];
    const pendingProducts = [
        { id: 1, name: 'Herbal Madu Propolis', seller: 'UMKM Berkah', image: 'https://picsum.photos/400/300?random=50' },
        { id: 2, name: 'Kaligrafi Kufi Modern', seller: 'Seni Islami Store', image: 'https://picsum.photos/400/300?random=51' },
    ];

    const TabButton: React.FC<{ tabName: Tab, label: string }> = ({ tabName, label }) => (
        <button onClick={() => setActiveTab(tabName)} className={`px-4 py-2 text-sm font-semibold rounded-md ${activeTab === tabName ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}>{label}</button>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'overview': return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="Total Users" value="1,250" icon={<UsersIcon className="w-8 h-8"/>} />
                    <StatCard title="Total Courses" value="75" icon={<BookOpenIcon className="w-8 h-8"/>} />
                    <StatCard title="Monthly Revenue" value="Rp 25jt" icon={<CashIcon className="w-8 h-8"/>} />
                    <StatCard title="Products Listed" value="312" icon={<BriefcaseIcon className="w-8 h-8"/>} />
                </div>
            );
            case 'users': return (
                 <div className="bg-white p-6 rounded-lg shadow">
                     <h3 className="font-bold text-xl mb-4 text-gray-700">User Management</h3>
                     <div className="overflow-x-auto">
                         <table className="w-full text-left">
                             <thead>
                                 <tr className="bg-gray-50 border-b">
                                     <th className="p-3 font-semibold text-gray-600">User</th>
                                     <th className="p-3 font-semibold text-gray-600">Role</th>
                                     <th className="p-3 font-semibold text-gray-600">Actions</th>
                                 </tr>
                             </thead>
                             <tbody>
                                {users.map(user => (
                                 <tr key={user.id} className="border-b hover:bg-gray-50">
                                     <td className="p-3">
                                        <div className="flex items-center space-x-3">
                                            <UserCircleIcon className="h-10 w-10 text-gray-400" />
                                            <div>
                                                <p className="font-semibold text-gray-800">{user.name}</p>
                                                <p className="text-sm text-gray-500">{user.email}</p>
                                            </div>
                                        </div>
                                     </td>
                                     <td className="p-3"><span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${user.role === 'Admin' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}`}>{user.role}</span></td>
                                     <td className="p-3"><button onClick={() => handleEditUser(user)} className="text-emerald-600 hover:underline font-medium">Edit Role</button></td>
                                 </tr>
                                ))}
                             </tbody>
                         </table>
                     </div>
                 </div>
            );
            case 'content': return (
                 <div className="bg-white p-6 rounded-lg shadow">
                     <h3 className="font-bold text-xl mb-4 text-gray-700">Content Moderation Queue</h3>
                     <div className="space-y-4">
                        {reportedContent.map(item => (
                            <div key={item.id} className="border p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <p className="text-gray-800">"{item.content}"</p>
                                    <p className="text-sm text-gray-500 mt-1">Reported by <span className="font-medium">{item.user}</span> for: <span className="font-semibold text-red-600">{item.reason}</span></p>
                                </div>
                                <div className="flex space-x-2 flex-shrink-0">
                                    <button className="flex items-center space-x-1 px-3 py-1 text-sm bg-emerald-100 text-emerald-800 rounded hover:bg-emerald-200"><CheckCircleIcon className="w-4 h-4"/><span>Approve</span></button>
                                    <button className="flex items-center space-x-1 px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200"><XCircleIcon className="w-4 h-4"/><span>Reject</span></button>
                                </div>
                            </div>
                        ))}
                     </div>
                 </div>
            );
            case 'marketplace': return (
                 <div className="bg-white p-6 rounded-lg shadow">
                     <h3 className="font-bold text-xl mb-4 text-gray-700">Marketplace Approval Queue</h3>
                     <div className="space-y-4">
                        {pendingProducts.map(item => (
                            <div key={item.id} className="border p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md"/>
                                    <div>
                                        <p className="font-semibold text-gray-800">{item.name}</p>
                                        <p className="text-sm text-gray-500">By: {item.seller}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2 flex-shrink-0">
                                    <button className="flex items-center space-x-1 px-3 py-1 text-sm bg-emerald-100 text-emerald-800 rounded hover:bg-emerald-200"><CheckCircleIcon className="w-4 h-4"/><span>Approve</span></button>
                                    <button className="flex items-center space-x-1 px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200"><XCircleIcon className="w-4 h-4"/><span>Reject</span></button>
                                </div>
                            </div>
                        ))}
                     </div>
                 </div>
            );
            case 'courses': return (
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="font-bold text-xl mb-4 text-gray-700">Course Management</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left align-middle">
                            <thead>
                                <tr className="bg-gray-50 border-b">
                                    <th className="p-3 font-semibold text-gray-600">Course</th>
                                    <th className="p-3 font-semibold text-gray-600">Price</th>
                                    <th className="p-3 font-semibold text-gray-600">Status</th>
                                    <th className="p-3 font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map(course => {
                                    const statusColors: Record<AdminCourse['status'], string> = {
                                        Pending: 'bg-amber-100 text-amber-800',
                                        Approved: 'bg-emerald-100 text-emerald-800',
                                        Rejected: 'bg-red-100 text-red-800',
                                    };
                                    return (
                                     <tr key={course.id} className="border-b hover:bg-gray-50">
                                         <td className="p-3">
                                            <p className="font-semibold text-gray-800">{course.title}</p>
                                            <p className="text-sm text-gray-500">by {course.instructorName}</p>
                                         </td>
                                         <td className="p-3 font-semibold text-gray-700">{course.price === 0 ? 'Free' : `Rp ${course.price.toLocaleString('id-ID')}`}</td>
                                         <td className="p-3"><span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[course.status]}`}>{course.status}</span></td>
                                         <td className="p-3 space-x-2 whitespace-nowrap">
                                             {course.status !== 'Approved' && (
                                                <button onClick={() => handleCourseStatusChange(course.id, 'Approved')} className="px-2 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-md hover:bg-emerald-200">Approve</button>
                                             )}
                                             {course.status !== 'Rejected' && (
                                                <button onClick={() => handleCourseStatusChange(course.id, 'Rejected')} className="px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-md hover:bg-red-200">Reject</button>
                                             )}
                                             <button onClick={() => handleEditCourse(course)} className="p-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200"><PencilIcon className="w-3 h-3"/></button>
                                         </td>
                                     </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
           );
            default: return null;
        }
    };

    return (
     <>
        <h2 className="text-3xl font-bold text-emerald-900 mb-2">Admin Panel</h2>
        <p className="text-gray-600 mb-6">Welcome, {userName}. Manage your platform here.</p>

        <div className="bg-white p-2 rounded-lg shadow mb-6 flex items-center space-x-2 flex-wrap">
            <TabButton tabName="overview" label="Overview" />
            <TabButton tabName="users" label="Users" />
            <TabButton tabName="courses" label="Courses" />
            <TabButton tabName="content" label="Content Moderation" />
            <TabButton tabName="marketplace" label="Marketplace" />
        </div>
        
        {renderContent()}
        {isRoleModalOpen && selectedUser && <UserRoleModal user={selectedUser} currentUser={currentUser} onClose={() => setIsRoleModalOpen(false)} onSave={handleRoleChange} onLogout={onLogout} />}
        {isEditCourseModalOpen && editingCourse && <EditCourseModal course={editingCourse} onClose={() => setIsEditCourseModalOpen(false)} onSave={handleSaveCourse} />}
    </>
    );
};

// --- Main Dashboard Page ---

// Centralized configuration for role-based UI elements
const DASHBOARD_CONFIG: Record<UserRole, {
    navLinks: Array<{ icon: React.ReactNode; label: string; view?: 'dashboard' | 'profile' }>;
    dashboardComponent: React.FC<any>; 
}> = {
    'Siswa': {
        navLinks: [
            { icon: <HomeIcon className="w-6 h-6" />, label: "Dashboard", view: 'dashboard' },
            { icon: <BookOpenIcon className="w-6 h-6" />, label: "My Courses" },
            { icon: <ShoppingCartIcon className="w-6 h-6" />, label: "My Orders" },
            { icon: <UsersIcon className="w-6 h-6" />, label: "Community" },
            { icon: <UserCircleIcon className="w-6 h-6" />, label: "My Profile", view: 'profile' },
        ],
        dashboardComponent: SiswaDashboard,
    },
    'Wali Santri': {
        navLinks: [
            { icon: <HomeIcon className="w-6 h-6" />, label: "Dashboard", view: 'dashboard' },
            { icon: <BookOpenIcon className="w-6 h-6" />, label: "Akademik" },
            { icon: <CreditCardIcon className="w-6 h-6" />, label: "Keuangan" },
            { icon: <UsersIcon className="w-6 h-6" />, label: "Community" },
            { icon: <UserCircleIcon className="w-6 h-6" />, label: "My Profile", view: 'profile' },
        ],
        dashboardComponent: WaliSantriDashboard,
    },
    'Pengajar': {
        navLinks: [
            { icon: <HomeIcon className="w-6 h-6" />, label: "Dashboard", view: 'dashboard' },
            { icon: <BookOpenIcon className="w-6 h-6" />, label: "Course Management" },
            { icon: <UsersIcon className="w-6 h-6" />, label: "Community" },
            { icon: <UserCircleIcon className="w-6 h-6" />, label: "My Profile", view: 'profile' },
        ],
        dashboardComponent: PengajarDashboard,
    },
    'Pengurus': {
         navLinks: [
            { icon: <HomeIcon className="w-6 h-6" />, label: "Dashboard", view: 'dashboard' },
            { icon: <ChartBarIcon className="w-6 h-6" />, label: "Reports" },
            { icon: <BookOpenIcon className="w-6 h-6" />, label: "All Courses" },
            { icon: <UsersIcon className="w-6 h-6" />, label: "Community" },
            { icon: <UserCircleIcon className="w-6 h-6" />, label: "My Profile", view: 'profile' },
        ],
        dashboardComponent: PengurusDashboard,
    },
    'Admin': {
        navLinks: [
            { icon: <HomeIcon className="w-6 h-6" />, label: "Dashboard", view: 'dashboard' },
            { icon: <UsersIcon className="w-6 h-6" />, label: "Community" },
            { icon: <CogIcon className="w-6 h-6" />, label: "Settings" },
            { icon: <UserCircleIcon className="w-6 h-6" />, label: "My Profile", view: 'profile' },
        ],
        dashboardComponent: AdminDashboard,
    }
};

const DashboardPage: React.FC<DashboardPageProps> = ({ user, onLogout }) => {
  const { name, role } = user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<'dashboard' | 'profile'>('dashboard');

  const handleNavLinkClick = (view?: 'dashboard' | 'profile') => {
      if(view) {
        setActiveView(view);
      }
      setIsMenuOpen(false);
  }
  
  const MainContent = () => {
      if (activeView === 'profile') {
          const fullUser: User = { id: 1, name: user.name, role: user.role, email: `${user.name.split(' ')[0].toLowerCase()}@digital.com` };
          return <ProfilePage user={fullUser} onBack={() => setActiveView('dashboard')} />;
      }
    
      const DashboardComponent = DASHBOARD_CONFIG[role]?.dashboardComponent;

      if (!DashboardComponent) {
          return <p>No dashboard available for this role.</p>;
      }

      const componentProps = {
          userName: name,
          onLogout: onLogout, // For AdminDashboard
          onNavigateToProfile: () => setActiveView('profile') // For SiswaDashboard
      };
      
      return <DashboardComponent {...componentProps} />;
  };

  const SidebarContent = () => (
    <>
      <div className="h-20 flex items-center justify-between px-4 border-b border-emerald-700">
         <a href="#" className="flex items-center space-x-2">
          <LogoIcon className="h-8 w-8 text-amber-400" />
          <span className="text-xl font-bold font-cairo text-white">
            Pesantren Go Digital
          </span>
        </a>
        <button className="md:hidden text-emerald-200 hover:text-white" onClick={() => setIsMenuOpen(false)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
          {(DASHBOARD_CONFIG[role]?.navLinks || []).map(link => 
              <NavLink 
                  key={link.label} 
                  {...link} 
                  active={link.view === activeView} 
                  onClick={() => handleNavLinkClick(link.view)} 
              />
          )}
      </nav>
      <div className="px-4 py-4 border-t border-emerald-700">
         <button
            onClick={onLogout}
            className="flex items-center w-full px-4 py-3 text-lg rounded-lg transition-colors duration-200 text-emerald-100 hover:bg-red-500 hover:text-white"
        >
            <LogoutIcon className="w-6 h-6" />
            <span className="ml-4">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-72 bg-emerald-800">
            <SidebarContent />
        </div>
      </aside>

      {/* Mobile Menu */}
      {isMenuOpen && (
          <div className="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" onClick={() => setIsMenuOpen(false)}></div>
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-emerald-800">
                  <SidebarContent />
              </div>
          </div>
      )}

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <header className="relative z-10 flex-shrink-0 flex h-20 bg-white shadow md:hidden">
             <button
                onClick={() => setIsMenuOpen(true)}
                className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div className="flex-1 px-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <LogoIcon className="h-8 w-8 text-emerald-600" />
                  <span className="text-xl font-bold font-cairo text-gray-800">
                    PGD
                  </span>
                </div>
                 <div className="flex items-center space-x-3">
                    <button onClick={() => setActiveView('profile')} className="flex items-center space-x-3">
                        <UserCircleIcon className="w-8 h-8 text-gray-400" />
                        <p className="font-semibold text-sm hidden sm:block">{name}</p>
                    </button>
                    <button onClick={onLogout} className="text-gray-500 hover:text-red-600"><LogoutIcon className="w-6 h-6"/></button>
                 </div>
            </div>
        </header>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="hidden md:flex justify-end items-center px-6 py-4 bg-white border-b">
                 <button onClick={() => setActiveView('profile')} className="flex items-center space-x-3 group">
                    <UserCircleIcon className="w-10 h-10 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                    <div className="text-left">
                        <p className="font-semibold group-hover:text-emerald-600 transition-colors">{name}</p>
                        <p className="text-sm text-gray-500">{role}</p>
                    </div>
                 </button>
            </div>
          <div className="p-6">
            <MainContent/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;