import React, { useState, useEffect } from 'react';
import { User } from './DashboardPage';
import { UserCircleIcon } from './icons/UserCircleIcon';
import { PencilIcon } from './icons/PencilIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { UsersIcon } from './icons/UsersIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';

interface ProfilePageProps {
  user: User;
  onBack: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onBack }) => {
    const [currentUser, setCurrentUser] = useState(user);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ name: currentUser.name, email: currentUser.email });
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setCurrentUser(user);
        setFormData({ name: user.name, email: user.email });
    }, [user]);

    useEffect(() => {
        if (isEditing) {
            setFormData({ name: currentUser.name, email: currentUser.email });
            setError(''); // Reset error when entering edit mode
        }
    }, [isEditing, currentUser]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (formData.name.trim() === '' || formData.email.trim() === '') {
            setError('Name and email cannot be empty.');
            return;
        }

        const hasChanges = formData.name !== currentUser.name || formData.email !== currentUser.email;

        if (!hasChanges) {
            setIsEditing(false);
            return;
        };
        
        console.log('Saving data:', formData);
        setError('');
        setCurrentUser(prev => ({ ...prev, ...formData }));
        setIsEditing(false);
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
    };
    
    const handleCancel = () => {
        setIsEditing(false);
        setError('');
    };

    const canEdit = true;
    const hasChanges = formData.name !== currentUser.name || formData.email !== currentUser.email;

    const ProfileDetail: React.FC<{ label: string; value: string }> = ({ label, value }) => (
        <div>
            <label className="block text-sm font-medium text-gray-500">{label}</label>
            <p className="mt-1 text-lg text-gray-900">{value}</p>
        </div>
    );
    
    const CourseHistoryItem: React.FC<{ title: string, progress: number, status: string }> = ({ title, progress, status }) => (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
                <h4 className="font-semibold text-emerald-800">{title}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2"><div className="bg-emerald-600 h-2.5 rounded-full" style={{width: `${progress}%`}}></div></div>
                <p className="text-sm text-gray-500 mt-1">{progress}% Complete</p>
            </div>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>{status}</span>
        </div>
    );
    
    const OrderHistoryItem: React.FC<{ orderId: string, date: string, total: string, status: string }> = ({orderId, date, total, status}) => (
        <tr className="border-b">
            <td className="p-3 text-sm text-gray-600 font-mono">{orderId}</td>
            <td className="p-3 text-sm text-gray-600">{date}</td>
            <td className="p-3 font-semibold text-gray-800">{total}</td>
            <td className="p-3"><span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{status}</span></td>
        </tr>
    );

    const ManagedCourseItem: React.FC<{ title: string, students: number }> = ({ title, students }) => (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
                <h4 className="font-semibold text-emerald-800">{title}</h4>
                <p className="text-sm text-gray-500">{students} students enrolled</p>
            </div>
            <button className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md hover:bg-emerald-200">View Analytics</button>
        </div>
    );

    const StatInfo: React.FC<{ label: string, value: string }> = ({ label, value }) => (
        <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-2xl font-bold text-emerald-800">{value}</p>
        </div>
    );

    const RoleSpecificContent = () => {
        switch (currentUser.role) {
            case 'Siswa':
                return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center"><BookOpenIcon className="w-6 h-6 mr-3 text-emerald-600" /> My Courses</h3>
                            <div className="space-y-4">
                                <CourseHistoryItem title="Fiqih Modern" progress={75} status="In Progress" />
                                <CourseHistoryItem title="Tahsin Al-Quran Online" progress={100} status="Completed" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center"><ShoppingCartIcon className="w-6 h-6 mr-3 text-emerald-600" /> Order History</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead><tr className="bg-gray-50"><th className="p-3 font-semibold text-gray-600">Order ID</th><th className="p-3 font-semibold text-gray-600">Date</th><th className="p-3 font-semibold text-gray-600">Total</th><th className="p-3 font-semibold text-gray-600">Status</th></tr></thead>
                                    <tbody>
                                        <OrderHistoryItem orderId="#12845" date="July 10, 2024" total="Rp 250.000" status="Completed" />
                                        <OrderHistoryItem orderId="#12801" date="June 28, 2024" total="Rp 120.000" status="Completed" />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            case 'Pengajar':
                return (
                    <div className="grid grid-cols-1 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center"><BookOpenIcon className="w-6 h-6 mr-3 text-emerald-600" /> Managed Courses</h3>
                            <div className="space-y-4">
                                <ManagedCourseItem title="Fiqih Modern" students={89} />
                                <ManagedCourseItem title="Sirah Nabawiyah" students={59} />
                            </div>
                        </div>
                    </div>
                );
            case 'Wali Santri':
                return (
                    <div className="grid grid-cols-1 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center"><UsersIcon className="w-6 h-6 mr-3 text-emerald-600" /> Guardian Information</h3>
                            <div className="bg-emerald-50 p-4 rounded-lg flex items-center space-x-4">
                                <UserCircleIcon className="w-12 h-12 text-emerald-500" />
                                <div>
                                    <p className="text-gray-600">You are the guardian for:</p>
                                    <p className="font-bold text-xl text-emerald-800">Santri Digital</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Pengurus':
                 return (
                    <div className="grid grid-cols-1 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center"><ChartBarIcon className="w-6 h-6 mr-3 text-emerald-600" /> Management Overview</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <StatInfo label="Total Santri" value="1,250" />
                                <StatInfo label="Active Courses" value="75" />
                                <StatInfo label="Monthly Revenue" value="Rp 25jt" />
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-emerald-900">My Profile</h2>
                <button onClick={onBack} className="text-emerald-600 font-semibold hover:underline">
                    &larr; Back to Dashboard
                </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8">
                    <div className="flex-shrink-0 mb-6 sm:mb-0">
                        <UserCircleIcon className="w-32 h-32 text-gray-300" />
                    </div>
                    <div className="flex-grow w-full">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-gray-800">{isEditing ? 'Edit Profile' : currentUser.name}</h3>
                            <div className="flex flex-col items-end">
                                {!isEditing && canEdit && (
                                    <button onClick={() => setIsEditing(true)} className="flex items-center space-x-2 px-4 py-2 text-sm bg-emerald-100 text-emerald-800 font-semibold rounded-lg hover:bg-emerald-200 transition">
                                        <PencilIcon className="w-4 h-4" />
                                        <span>Edit</span>
                                    </button>
                                )}
                                {saveSuccess && (
                                    <div className="flex items-center space-x-2 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md mt-2 animate-pulse">
                                        <CheckCircleIcon className="w-5 h-5" />
                                        <span>Profile updated!</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {isEditing ? (
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                                </div>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                <div className="flex justify-end space-x-3 pt-2">
                                    <button onClick={handleCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                                    <button 
                                        onClick={handleSave} 
                                        disabled={!hasChanges && !error}
                                        className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ProfileDetail label="Full Name" value={currentUser.name} />
                                <ProfileDetail label="Email Address" value={currentUser.email} />
                                <ProfileDetail label="Role" value={currentUser.role} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <RoleSpecificContent />
        </div>
    );
};

export default ProfilePage;