import React from 'react';
import { Gift, Fish, Gem, Users, Heart, Cake } from 'lucide-react';
import './App.css';
import './index.css';
import images from './images'
import fishvideo from './assets/fishvideo.mp4';
import fishvideo2 from './assets/fishvideo2.mp4';

const ANH_BA_INFO = {
  ten: "Anh Ba",
  tenThanMat: "Anh Ba Dũng", 
  loiChucChinh: "Chúc anh tuổi mới thêm vững chãi, vạn sự hanh thông, gia đình luôn là điểm tựa.",
  anhHero: images.aba2concunV2, 
  nguoiGui: "Em Trai Của Anh", 
};

const DANH_SACH_LOI_CHUC = [
  {
    nguoiGui: "Từ Ba Mẹ",
    loiChuc: "Chúc con trai của ba mẹ tuổi mới luôn mạnh khỏe, bình an và thành công trên con đường đã chọn. Gia đình luôn tự hào về con.",
    avatar: "https://placehold.co/100x100/3498db/ffffff?text=Ba+Mẹ"
  },
  {
    nguoiGui: "Từ Anh Chị Em",
    loiChuc: "Chúc mừng sinh nhật anh Ba! Chúc anh tuổi mới tiền vào như nước, mọi dự định đều thành công mỹ mãn nhé!",
    avatar: "https://placehold.co/100x100/9b59b6/ffffff?text=ACE"
  },
  {
    nguoiGui: "Từ Bạn Bè Thân",
    loiChuc: "Happy birthday ông bạn! Tuổi mới bớt lo toan, thêm nhiều niềm vui và luôn giữ vững phong độ nhé. Hẹn bữa nhậu!",
    avatar: "https://placehold.co/100x100/f1c40f/ffffff?text=Bạn+Bè"
  },
];

// Danh sách ảnh kỷ niệm gia đình
const ANH_GIA_DINH = [
  { src: images.aba_self, caption: "Anh Ba tự sướng" },
  { src: images.aba_aoXanh, caption: "Anh Ba mặc áo xanh" },
  { src: images.aba_chongdau, caption: "Anh Ba suy tư" },
  { src: images.aba_nam_cungcho, caption: "Anh Ba nằm cùng cún" },
  { src: images.aba_ochua, caption: "Anh Ba đi chùa" },
  { src: images.aba_chatga, caption: "Anh Ba chặt gà" },
];

const useIntersectionObserver = (options) => {
  const [ref, setRef] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible];
};

// Component section có hiệu ứng fade-in
const AnimatedSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section 
      ref={ref} 
      className={`transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </section>
  );
};

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#1A2C47] flex flex-col justify-center items-center z-50">
    <style>
      {`
        @keyframes swim {
          0%, 100% { transform: translateX(-20px) rotate(-5deg); }
          50% { transform: translateX(20px) rotate(5deg); }
        }
        .fish-swimming {
          animation: swim 4s ease-in-out infinite;
        }
      `}
    </style>
    <div className="fish-swimming">
        <Fish className="text-amber-400" size={80} />
    </div>
    <p className="text-white text-lg mt-4 font-serif">Đang tải bất ngờ cho {ANH_BA_INFO.ten}...</p>
  </div>
);


// Banner chính
const Hero = () => (
  <div className="h-screen w-full relative flex items-center justify-center text-center text-white p-4">
    <div 
      className="absolute inset-0 bg-cover bg-center z-0" 
      style={{ backgroundImage: `url(${ANH_BA_INFO.anhHero})` }}
    ></div>
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    <div className="relative z-20 animate-fadeInUp">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-amber-400" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
        Chúc Mừng Sinh Nhật
      </h1>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mt-2 mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>{ANH_BA_INFO.tenThanMat}</h2>
      <p className="max-w-2xl mx-auto text-lg md:text-xl font-light">
        {ANH_BA_INFO.loiChucChinh}
      </p>
    </div>
  </div>
);

// Tiêu đề của mỗi phần
const SectionTitle = ({ icon: Icon, children }) => (
    <div className="flex items-center justify-center mb-12">
        <Icon className="text-amber-400 mr-4" size={32} />
        <h2 className="text-4xl font-serif font-bold text-gray-800">{children}</h2>
    </div>
);


// Phần sở thích
const HobbySection = () => (
  <AnimatedSection className="py-20 px-4 bg-gray-50">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-stretch">
        {/* Cột Cá Cảnh */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left h-full">
          <div className="flex items-center mb-4">
            <Fish className="text-sky-600 mr-3" size={40}/>
            <h3 className="text-3xl font-serif text-sky-800">Thế Giới Ngư Cảnh</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Nơi anh tìm thấy sự tĩnh tại, chiêm nghiệm vẻ đẹp của tự nhiên và nuôi dưỡng niềm đam mê. Mỗi chú cá như một nét vẽ tạo nên bức tranh an yên trong tâm hồn.
          </p>
          <video
            src={fishvideo}
            alt="Hồ cá Koi"
            className="rounded-lg shadow-xl w-full h-auto"
            controls
            autoPlay
            loop
            muted
          />
        </div>

        {/* Cột Phong Thủy */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left h-full">
          <div className="flex items-center mb-4">
            <Gem className="text-emerald-600 mr-3" size={40}/>
            <h3 className="text-3xl font-serif text-emerald-800">Năng Lượng Phong Thủy</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Những vật phẩm không chỉ để trang trí mà còn là nguồn năng lượng tích cực, mang lại may mắn, tài lộc và sự thịnh vượng cho anh và cả gia đình.
          </p>
          <video
            src={fishvideo2}
            alt="Phong Thủy"
            className="rounded-lg shadow-xl w-full h-auto"
            controls
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  </AnimatedSection>
);



// Phần kỷ niệm gia đình
const FamilyGallery = () => (
  <AnimatedSection className="py-20 px-4 bg-white">
    <div className="container mx-auto">
      <SectionTitle icon={Users}>Khoảnh Khắc Thư giản</SectionTitle>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Mỗi bức ảnh là một câu chuyện, một ký ức vô giá. Đây là những mảnh ghép tạo nên một người anh ba đáng tin cậy, làm chỗ dựa cho cả gia đình.
      </p>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {ANH_GIA_DINH.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group relative break-inside-avoid">
            <img src={photo.src} alt={photo.caption} className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center p-2 font-semibold">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

// Phần Lời chúc
const WishesSection = () => (
  <AnimatedSection className="py-20 px-4 bg-gray-50">
    <div className="container mx-auto">
      <SectionTitle icon={Heart}>Lời Chúc Từ Trái Tim</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DANH_SACH_LOI_CHUC.map((wish, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-400 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <img src={wish.avatar} alt={wish.nguoiGui} className="w-24 h-24 rounded-full border-4 border-white -mt-20 shadow-md mb-4"/>
            <h4 className="text-xl font-semibold text-gray-800 font-serif">{wish.nguoiGui}</h4>
            <p className="text-gray-600 mt-2 flex-grow">"{wish.loiChuc}"</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

// Hộp quà bất ngờ cuối cùng
const GiftBox = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <AnimatedSection className="py-20 px-4 bg-cover bg-fixed" style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')"}}>
            <div className="container mx-auto text-center">
                 <SectionTitle icon={Cake}>Và Một Món Quà Cuối...</SectionTitle>
                {!isOpen ? (
                    <div 
                        className="cursor-pointer inline-block group"
                        onClick={() => setIsOpen(true)}
                    >
                        <Gift className="text-rose-500 w-32 h-32 mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:animate-bounce" />
                        <p className="mt-4 text-xl text-gray-700 font-semibold">Bấm vào đây để mở quà nhé!</p>
                    </div>
                ) : (
                    <div className="bg-white/90 p-10 rounded-xl shadow-2xl max-w-2xl mx-auto animate-fadeInUp">
                        <h3 className="text-3xl font-bold font-serif text-rose-600">Món quà lớn nhất...</h3>
                        <p className="text-gray-700 text-lg mt-4">
                            ...chính là tình cảm của cả gia đình luôn ở bên cạnh anh. Chúc anh một sinh nhật thật trọn vẹn, ấm áp và ngập tràn hạnh phúc.
                        </p>
                        <p className="font-bold text-xl mt-6">Yêu Anh Ba!</p>
                        {/* Chèn ảnh khi mở quà */}
                        <img 
                            src={images.aba_man}
                            alt="Quà Bất Ngờ" 
                            className="mt-6 rounded-lg shadow-lg mx-auto"
                        />
                    </div>
                )}
            </div>
        </AnimatedSection>
    )
      
}


// Chân trang
const Footer = () => (
    <footer className="bg-[#1A2C47] text-center p-6 text-gray-400">
        <p>Một món quà nhỏ từ <span className="font-bold text-amber-400">{ANH_BA_INFO.nguoiGui}</span> ❤️</p>
        <p className="text-sm mt-1">&copy; 2025 - Mãi là gia đình.</p>
    </footer>
)

// Component chính của ứng dụng
export default function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Thời gian chờ 3 giây
    return () => clearTimeout(timer);
  }, []);
  
  // Thêm CSS cho animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 40px, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      .animate-fadeInUp {
        animation: fadeInUp 1s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-white font-sans">
      <Hero />
      <main>
        <HobbySection />
        

        <FamilyGallery />
        <WishesSection />
        <GiftBox />
      </main>
      <Footer />
    </div>
  );
}
