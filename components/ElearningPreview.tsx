import React, { useState, useEffect, useRef } from 'react';
import { UserCircleIcon } from './icons/UserCircleIcon';
import { XIcon } from './icons/XIcon';
import { StarIcon } from './icons/StarIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { LogoIcon } from './icons/LogoIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { LockClosedIcon } from './icons/LockClosedIcon';
import { XCircleIcon } from './icons/XCircleIcon';
import { DownloadIcon } from './icons/DownloadIcon';

type Category = 'Fiqh' | 'Islamic Finance' | 'Qur\'anic Studies' | 'Programming' | 'Digital Marketing';
type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

interface Instructor {
  id: number;
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

interface Course {
  id: number;
  title: string;
  instructorId: number;
  description:string;
  detailedDescription: string;
  learnings: string[];
  imageUrl: string;
  difficulty: Difficulty;
  price: number | 'Free';
  rating: number;
  category: Category;
  prerequisites?: string[];
}

const instructors: Instructor[] = [
  { id: 1, name: 'Ustadz Abdullah', title: 'Lc., M.A.', bio: 'Specializing in Fiqh and Islamic Jurisprudence with over 15 years of teaching experience. He is known for his ability to explain complex topics in an accessible way.', avatarUrl: 'https://picsum.photos/100/100?random=30' },
  { id: 2, name: 'Hasan Basri', title: 'S.Kom, CDMP', bio: 'A certified digital marketing professional with a passion for helping UMKM grow their business in a Syariah-compliant manner.', avatarUrl: 'https://picsum.photos/100/100?random=31' },
  { id: 3, name: 'Qori Ahmad Zaki', title: 'Al-Hafidz', bio: 'An experienced Qori with a certified sanad. He has dedicated his life to teaching the proper recitation of the Al-Quran.', avatarUrl: 'https://picsum.photos/100/100?random=32' },
  { id: 4, name: 'Fatima Azzahra', title: 'M.T.', bio: 'A software engineer and educator who believes in empowering the next generation with technological skills grounded in Islamic values.', avatarUrl: 'https://picsum.photos/100/100?random=33' },
];

interface CourseCardProps {
  course: Course;
  instructor: Instructor;
  onViewDetails: () => void;
  onEnroll: (course: Course) => void;
  isEnrolled: boolean;
  onViewCertificate: () => void;
  enrolledCourses: string[];
  onViewInstructor: (instructorId: number) => void;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => (
                <StarIcon key={`full-${i}`} className="h-5 w-5 text-amber-400" />
            ))}
            {hasHalfStar && (
                <div className="relative" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <StarIcon className="h-5 w-5 text-gray-300 absolute" />
                    <div className="absolute top-0 left-0 h-full w-1/2 overflow-hidden">
                        <StarIcon className="h-5 w-5 text-amber-400" />
                    </div>
                </div>
            )}
            {[...Array(emptyStars)].map((_, i) => (
                <StarIcon key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
            ))}
        </div>
    );
};

const CourseCard: React.FC<CourseCardProps> = ({ course, instructor, onViewDetails, onEnroll, isEnrolled, onViewCertificate, enrolledCourses, onViewInstructor }) => {
    const difficultyColors: Record<Difficulty, string> = {
        Beginner: 'bg-emerald-100 text-emerald-800',
        Intermediate: 'bg-sky-100 text-sky-800',
        Advanced: 'bg-amber-100 text-amber-800',
    };

    const prerequisitesMet = course.prerequisites?.every(prereq => enrolledCourses.includes(prereq)) ?? true;
    const canEnroll = !isEnrolled && prerequisitesMet;

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col border border-gray-100 hover:-translate-y-2">
            <div className="overflow-hidden h-48 relative">
                <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyColors[course.difficulty]}`}>
                        {course.difficulty}
                    </span>
                    {course.prerequisites && course.prerequisites.length > 0 && (
                        <span title="This course has prerequisites" className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-200 text-gray-700 flex items-center gap-1 cursor-default">
                            <LockClosedIcon className="w-3 h-3"/>
                            Prerequisites
                        </span>
                    )}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{course.title}</h3>
                 <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-x-4 gap-y-1">
                    <div className="flex items-center">
                        <UserCircleIcon className="h-5 w-5 mr-1.5 text-emerald-500" />
                        <button onClick={() => onViewInstructor(instructor.id)} className="text-left hover:underline hover:text-emerald-700 transition-colors">
                            <span>{instructor.name}</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <StarRating rating={course.rating} />
                        <span className="font-semibold text-gray-700">{course.rating}</span>
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{course.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                     <p className="text-lg font-bold text-emerald-700 mb-4">
                        {typeof course.price === 'number' ? `Rp ${course.price.toLocaleString('id-ID')}` : 'Free'}
                    </p>
                    {isEnrolled ? (
                        <button
                            onClick={onViewCertificate}
                            className="w-full text-center bg-emerald-100 text-emerald-800 font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                            aria-label={`View certificate for ${course.title}`}
                        >
                            <CheckCircleIcon className="w-5 h-5" />
                            <span>Enrolled</span>
                        </button>
                    ) : course.price === 'Free' ? (
                        <button
                            onClick={() => onEnroll(course)}
                            disabled={!canEnroll}
                            title={!prerequisitesMet ? `Requires completion of: ${course.prerequisites?.join(', ')}` : 'Enroll for free'}
                            className={`w-full text-center bg-amber-400 text-emerald-900 font-semibold py-2 px-4 rounded-lg transform transition-all duration-300 ${!canEnroll ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-500 hover:scale-105'}`}
                        >
                            Enroll Now (Free)
                        </button>
                    ) : (
                        <button
                            onClick={onViewDetails}
                            className="w-full text-center bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transform transition-all duration-300 hover:bg-emerald-700 hover:scale-105"
                        >
                            View Details
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

interface CourseModalProps {
    course: Course;
    instructor: Instructor;
    onClose: () => void;
    onEnroll: (course: Course) => void;
    isEnrolled: boolean;
    onViewCertificate: () => void;
    enrolledCourses: string[];
    onViewInstructor: (instructorId: number) => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, instructor, onClose, onEnroll, isEnrolled, onViewCertificate, enrolledCourses, onViewInstructor }) => {
    const prerequisitesMet = course.prerequisites?.every(prereq => enrolledCourses.includes(prereq)) ?? true;
    const canEnroll = !isEnrolled && prerequisitesMet;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-title"
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row transform transition-transform duration-300 scale-95"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <img src={course.imageUrl} alt={course.title} className="w-full h-48 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none" />
                </div>
                <div className="p-8 relative flex-grow">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
                        <XIcon className="h-6 w-6" />
                        <span className="sr-only">Close modal</span>
                    </button>
                    <h2 id="course-title" className="text-3xl font-bold text-emerald-900 mb-2">{course.title}</h2>
                    <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-x-6 gap-y-2">
                      <div className="flex items-center">
                          <UserCircleIcon className="h-5 w-5 mr-2 text-emerald-600" />
                           <button onClick={() => onViewInstructor(instructor.id)} className="hover:underline hover:text-emerald-700 transition-colors">
                            {instructor.name}, {instructor.title}
                          </button>
                      </div>
                      <div className="flex items-center gap-2">
                          <StarRating rating={course.rating} />
                          <span className="font-semibold text-gray-700 text-lg">{course.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{course.detailedDescription}</p>
                    <h4 className="font-bold text-lg text-emerald-800 mb-3">What you'll learn:</h4>
                    <ul className="space-y-2 mb-8">
                        {course.learnings.map((learning, index) => (
                            <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 mt-1">
                                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                </div>
                                <span className="text-gray-600">{learning}</span>
                            </li>
                        ))}
                    </ul>

                    {course.prerequisites && course.prerequisites.length > 0 && (
                        <>
                            <h4 className="font-bold text-lg text-emerald-800 mb-3">Prerequisites:</h4>
                            <ul className="space-y-3 mb-8">
                                {course.prerequisites.map((prereq, index) => {
                                    const isCompleted = enrolledCourses.includes(prereq);
                                    return (
                                        <li key={index} className="flex items-center p-3 rounded-lg bg-gray-50 border">
                                            {isCompleted ? (
                                                <CheckCircleIcon className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0"/>
                                            ) : (
                                                <XCircleIcon className="h-6 w-6 text-red-500 mr-3 flex-shrink-0"/>
                                            )}
                                            <span className={`text-gray-700 ${!isCompleted ? 'font-semibold' : ''}`}>{prereq}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                     )}

                     {isEnrolled ? (
                         <button 
                            onClick={onViewCertificate}
                            className="w-full text-center block bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-emerald-700 transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
                        >
                             <CheckCircleIcon className="w-6 h-6" />
                             <span>View Certificate</span>
                        </button>
                    ) : (
                        <button 
                            onClick={() => onEnroll(course)}
                            disabled={!canEnroll}
                            title={!prerequisitesMet ? `Requires completion of: ${course.prerequisites?.join(', ')}` : `Enroll for ${typeof course.price === 'number' ? `Rp ${course.price.toLocaleString('id-ID')}` : 'Free'}`}
                            className={`w-full text-center block bg-amber-400 text-emerald-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg ${!canEnroll ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-500'}`}
                        >
                             Enroll Now {typeof course.price === 'number' ? `(Rp ${course.price.toLocaleString('id-ID')})` : '(Free)'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const CertificateModal: React.FC<{ course: Course; onClose: () => void }> = ({ course, onClose }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const certificateRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(onClose, 300); // Animation duration
    };

    const handleDownloadPDF = () => {
        alert("Simulating PDF Download...\n\nIn a real app, this would use libraries like html2canvas and jsPDF to capture the certificate content and generate a downloadable PDF file.");
        /*
        // Example implementation with external libraries:
        const element = certificateRef.current;
        if (element) {
            import('html2canvas').then(html2canvasModule => {
                const html2canvas = html2canvasModule.default;
                import('jspdf').then(jspdfModule => {
                    const jsPDF = jspdfModule.default;
                    html2canvas(element, { scale: 2 }).then(canvas => {
                        const imgData = canvas.toDataURL('image/png');
                        const pdf = new jsPDF({
                            orientation: 'landscape',
                            unit: 'px',
                            format: [canvas.width, canvas.height]
                        });
                        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                        pdf.save(`certificate-${course.title.replace(/\s+/g, '-')}.pdf`);
                    });
                });
            });
        }
        */
    };
    
    const completionDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
    });
    const userName = 'Santri Digital';
    const certificateId = `PGD-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 90000) + 10000)}`;
    const instructor = instructors.find(inst => inst.id === course.instructorId);

    return (
        <div
            className={`fixed inset-0 bg-black z-50 flex justify-center items-center p-4 transition-opacity duration-300 ${isAnimating ? 'bg-opacity-70' : 'bg-opacity-0'}`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-title"
        >
            <div
                className={`bg-white rounded-lg shadow-2xl w-full max-w-4xl transform transition-all duration-300 ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-30">
                    <XIcon className="h-6 w-6" />
                    <span className="sr-only">Close certificate</span>
                </button>
                <div ref={certificateRef}>
                    <div className="p-2">
                        <div className="border-4 border-emerald-800 rounded-md p-1">
                            <div className="border-2 border-amber-400 rounded-sm bg-slate-50 p-8 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 z-0 opacity-5"
                                    style={{ backgroundImage: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(255,255,255,0) 60%)' }}
                                ></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="flex items-center space-x-3">
                                            <LogoIcon className="h-12 w-12 text-emerald-700"/>
                                            <div>
                                                <h3 className="font-bold font-cairo text-xl text-emerald-900">Pesantren Go Digital</h3>
                                                <p className="text-sm text-gray-500">E-Learning Platform</p>
                                            </div>
                                        </div>
                                        <div className="text-right text-xs text-gray-600">
                                            <p>Date Issued: {completionDate}</p>
                                            <p>Certificate ID: {certificateId}</p>
                                        </div>
                                    </div>
                                    <div className="text-center space-y-3 my-10">
                                        <h2 id="certificate-title" className="text-5xl font-bold font-cairo text-emerald-900" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>Certificate of Completion</h2>
                                        <p className="text-xl text-gray-600">This is to certify that</p>
                                        <p className="text-4xl font-cairo text-amber-700 font-bold tracking-wider py-2 border-b-2 border-amber-500 inline-block">{userName}</p>
                                        <p className="text-xl text-gray-600">has successfully completed the online course</p>
                                        <p className="text-3xl font-semibold text-emerald-900 mt-2">{course.title}</p>
                                    </div>
                                    <div className="flex justify-between items-end mt-16 relative">
                                        <div className="text-center w-1/3">
                                            <p className="font-cairo text-lg italic text-gray-700 h-10">{instructor?.name}</p>
                                            <hr className="border-gray-500"/>
                                            <p className="font-semibold text-gray-700 mt-2">{instructor?.name}, {instructor?.title}</p>
                                            <p className="text-sm text-gray-500">Lead Instructor</p>
                                        </div>
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center shadow-xl">
                                                <ShieldCheckIcon className="h-20 w-20 text-white opacity-90"/>
                                            </div>
                                        </div>
                                        <div className="text-center w-1/3">
                                            <p className="font-cairo text-lg italic text-gray-700 h-10">Ahmad Zaky, M.Sc.</p>
                                            <hr className="border-gray-500"/>
                                            <p className="font-semibold text-gray-700 mt-2">Ahmad Zaky, M.Sc.</p>
                                            <p className="text-sm text-gray-500">Director, PGD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-8 pt-4 text-center">
                    <button
                        onClick={handleDownloadPDF}
                        className="inline-flex items-center justify-center gap-3 bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-emerald-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
                    >
                        <DownloadIcon className="w-6 h-6" />
                        Download as PDF
                    </button>
                </div>
            </div>
        </div>
    );
};


const InstructorProfileModal: React.FC<{
    instructor: Instructor;
    courses: Course[];
    onClose: () => void;
    onSelectCourse: (course: Course) => void;
}> = ({ instructor, courses, onClose, onSelectCourse }) => {
    const coursesByInstructor = courses.filter(c => c.instructorId === instructor.id);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="instructor-name"
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-95"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-8 relative">
                     <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
                        <XIcon className="h-6 w-6" />
                        <span className="sr-only">Close profile</span>
                    </button>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 pb-6 border-b">
                        <img src={instructor.avatarUrl} alt={instructor.name} className="w-28 h-28 rounded-full object-cover ring-4 ring-emerald-100" />
                        <div className="text-center sm:text-left">
                            <h2 id="instructor-name" className="text-3xl font-bold text-emerald-900">{instructor.name}, {instructor.title}</h2>
                            <p className="text-gray-600 mt-2 text-lg">{instructor.bio}</p>
                        </div>
                    </div>
                    <h3 className="font-bold text-xl text-emerald-800 mb-4">Other Courses by {instructor.name}</h3>
                    <div className="space-y-3">
                        {coursesByInstructor.map(course => (
                             <div key={course.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="flex items-center space-x-4">
                                    <img src={course.imageUrl} alt={course.title} className="w-16 h-12 object-cover rounded-md flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-800">{course.title}</p>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <StarRating rating={course.rating} />
                                            <span className="text-sm text-gray-600">{course.rating}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => onSelectCourse(course)}
                                    className="text-sm bg-emerald-100 text-emerald-800 px-4 py-2 rounded-md hover:bg-emerald-200 font-semibold flex-shrink-0"
                                >
                                    View
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ElearningPreview: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [showCertificate, setShowCertificate] = useState(false);
    const [certificateCourse, setCertificateCourse] = useState<Course | null>(null);
    const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
    const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);
    
    const courseCategories: ('All' | Category)[] = ['All', 'Fiqh', 'Qur\'anic Studies', 'Islamic Finance', 'Digital Marketing', 'Programming'];
    const [activeCategory, setActiveCategory] = useState<'All' | Category>('All');

    const difficultyLevels: ('All' | Difficulty)[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];
    const [activeFilter, setActiveFilter] = useState<'All' | Difficulty>('All');

    const courses: Course[] = [
        {
            id: 1,
            title: 'Fiqih Modern Lanjutan',
            instructorId: 1,
            description: 'Studi kasus mendalam tentang fiqih modern, melanjutkan materi dari kursus Fiqih Modern.',
            detailedDescription: 'Kursus ini adalah kelanjutan dari Fiqih Modern, dengan studi kasus yang lebih kompleks seperti Fiqih Kedokteran dan Keuangan Digital Lanjutan, yang memerlukan pemahaman dasar yang kuat dari kursus sebelumnya.',
            learnings: ['Analisis Fiqih Muamalah Kontemporer', 'Isu Bioetika dalam Islam', 'Fiqih Jinayat di Era Digital', 'Studi Komparatif Madzhab'],
            imageUrl: 'https://picsum.photos/400/300?random=24',
            difficulty: 'Advanced',
            price: 350000,
            rating: 4.9,
            category: 'Fiqh',
            prerequisites: ['Fiqih Modern'],
        },
        {
            id: 2,
            title: 'Fiqih Modern',
            instructorId: 1,
            description: 'Membahas isu-isu fiqih kontemporer yang relevan dengan kehidupan sehari-hari di era digital.',
            detailedDescription: 'Kursus ini mengupas tuntas berbagai permasalahan fiqih modern, mulai dari transaksi digital, etika media sosial, hingga isu bioetika dalam pandangan Islam. Cocok untuk Anda yang ingin memahami hukum Islam secara kontekstual.',
            learnings: ['Analisis transaksi e-commerce & fintech syariah.', 'Kaidah fiqih dalam bermedia sosial.', 'Pandangan ulama kontemporer tentang isu modern.', 'Studi kasus permasalahan fiqih di masyarakat.'],
            imageUrl: 'https://picsum.photos/400/300?random=20',
            difficulty: 'Advanced',
            price: 250000,
            rating: 4.8,
            category: 'Fiqh',
            prerequisites: ['Tahsin Al-Quran Online'],
        },
        {
            id: 3,
            title: 'Digital Marketing Syariah',
            instructorId: 2,
            description: 'Strategi pemasaran digital yang efektif dan sesuai dengan prinsip-prinsip syariah untuk UMKM.',
            detailedDescription: 'Pelajari cara membangun brand dan memasarkan produk secara online tanpa melanggar prinsip syariah. Dari SEO, content marketing, hingga social media ads, semua dibahas dengan pendekatan yang halal dan berkah.',
            learnings: ['Fundamental marketing syariah.', 'Riset pasar dan segmentasi audiens.', 'Optimasi SEO untuk produk halal.', 'Strategi iklan berbayar yang etis.'],
            imageUrl: 'https://picsum.photos/400/300?random=21',
            difficulty: 'Intermediate',
            price: 175000,
            rating: 4.9,
            category: 'Digital Marketing',
        },
        {
            id: 4,
            title: 'Tahsin Al-Quran Online',
            instructorId: 3,
            description: 'Perbaiki bacaan Al-Quran Anda dengan bimbingan langsung dari ahli qiraat bersanad.',
            detailedDescription: 'Program intensif untuk memperbaiki makharijul huruf, sifatul huruf, dan hukum-hukum tajwid. Dengan metode interaktif dan setoran hafalan, program ini akan meningkatkan kualitas bacaan Al-Quran Anda secara signifikan.',
            learnings: ['Koreksi makharijul huruf secara detail.', 'Penguasaan hukum nun sukun, mim sukun, dan mad.', 'Praktik membaca dengan tartil.', 'Tips menjaga kelancaran bacaan.'],
            imageUrl: 'https://picsum.photos/400/300?random=22',
            difficulty: 'Beginner',
            price: 'Free',
            rating: 4.7,
            category: 'Qur\'anic Studies',
        },
        {
            id: 5,
            title: 'Dasar-dasar Pemrograman',
            instructorId: 4,
            description: 'Pengenalan dunia coding untuk santri. Belajar logika dan fundamental pemrograman dari nol.',
            detailedDescription: 'Kursus ini dirancang khusus untuk pemula yang ingin terjun ke dunia teknologi. Mempelajari konsep dasar algoritma dan struktur data menggunakan bahasa yang mudah dipahami, sebagai fondasi untuk menjadi programmer handal.',
            learnings: ['Logika berpikir komputasional.', 'Pengenalan variabel, tipe data, dan operator.', 'Struktur kontrol: percabangan & perulangan.', 'Membuat program sederhana pertama Anda.'],
            imageUrl: 'https://picsum.photos/400/300?random=23',
            difficulty: 'Beginner',
            price: 'Free',
            rating: 4.6,
            category: 'Programming',
        },
    ];

    const openModal = (course: Course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };
    const handleEnroll = (course: Course) => {
        setCertificateCourse(course);
        setShowCertificate(true);
        if (isModalOpen) closeModal();
        if (!enrolledCourses.includes(course.title)) {
            setEnrolledCourses(prev => [...prev, course.title]);
        }
    };
    const handleViewCertificate = (course: Course) => {
        if (isModalOpen) closeModal();
        setCertificateCourse(course);
        setShowCertificate(true);
    };
    const closeCertificate = () => {
        setShowCertificate(false);
        setCertificateCourse(null);
    };
    const handleViewInstructor = (instructorId: number) => {
        const instructor = instructors.find(inst => inst.id === instructorId);
        if (instructor) {
            closeModal();
            setSelectedInstructor(instructor);
        }
    };
    const closeInstructorModal = () => {
        setSelectedInstructor(null);
    };
    const handleSelectCourseFromProfile = (course: Course) => {
        closeInstructorModal();
        openModal(course);
    };
    
    const filteredCourses = courses.filter(course => 
        (activeCategory === 'All' || course.category === activeCategory) &&
        (activeFilter === 'All' || course.difficulty === activeFilter)
    );

    return (
        <section id="elearning" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
                        Kelas Unggulan E-Learning
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Tingkatkan ilmu agama dan keterampilan digital Anda dengan
                        kurikulum terbaik yang kami siapkan.
                    </p>
                </div>

                <div className="flex justify-center items-center mb-4 flex-wrap gap-2">
                    {courseCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                             className={`px-4 py-2 text-sm sm:text-base sm:px-5 sm:py-2 font-semibold rounded-full transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-emerald-700 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-emerald-100 border border-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex justify-center items-center mb-12 flex-wrap gap-2">
                    {difficultyLevels.map(level => (
                        <button
                            key={level}
                            onClick={() => setActiveFilter(level)}
                            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                                activeFilter === level
                                    ? 'bg-emerald-600 text-white shadow-md'
                                    : 'bg-white text-gray-700 hover:bg-emerald-100'
                            }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCourses.map((course) => {
                        const instructor = instructors.find(inst => inst.id === course.instructorId);
                        if (!instructor) return null;
                        const isEnrolled = enrolledCourses.includes(course.title);
                        return (
                            <CourseCard 
                                key={course.id} 
                                course={course}
                                instructor={instructor}
                                isEnrolled={isEnrolled}
                                onViewDetails={() => openModal(course)}
                                onEnroll={handleEnroll}
                                onViewCertificate={() => handleViewCertificate(course)}
                                enrolledCourses={enrolledCourses}
                                onViewInstructor={handleViewInstructor}
                            />
                        );
                    })}
                </div>
                {isModalOpen && selectedCourse && (() => {
                    const instructor = instructors.find(inst => inst.id === selectedCourse.instructorId);
                    if (!instructor) return null;
                    return (
                        <CourseModal 
                            course={selectedCourse}
                            instructor={instructor}
                            onClose={closeModal} 
                            onEnroll={handleEnroll}
                            isEnrolled={enrolledCourses.includes(selectedCourse.title)}
                            onViewCertificate={() => handleViewCertificate(selectedCourse)}
                            enrolledCourses={enrolledCourses}
                            onViewInstructor={handleViewInstructor}
                        />
                    );
                })()}
                {showCertificate && certificateCourse && (
                    <CertificateModal 
                        course={certificateCourse} 
                        onClose={closeCertificate}
                    />
                )}
                {selectedInstructor && (
                    <InstructorProfileModal
                        instructor={selectedInstructor}
                        courses={courses}
                        onClose={closeInstructorModal}
                        onSelectCourse={handleSelectCourseFromProfile}
                    />
                )}
            </div>
        </section>
    );
};

export default ElearningPreview;