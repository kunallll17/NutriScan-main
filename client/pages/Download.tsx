import { Apple, Smartphone, Laptop, Download as DownloadIcon } from "lucide-react";

const DownloadOption = ({
  icon: Icon,
  title,
  description,
  platform,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  platform: string;
}) => (
  <div className="w-full max-w-[320px] bg-white border-4 border-nutri-gray rounded-xl p-8 shadow-lg text-center flex flex-col items-center">
    <div className="w-20 h-20 rounded-full border-2 border-dashed border-nutri-gray bg-nutri-light-green flex items-center justify-center mb-6">
      <Icon className="w-10 h-10 text-black" />
    </div>
    <h3 className="font-architects text-3xl text-black mb-2">{platform}</h3>
    <p className="font-quicksand text-base text-black mb-6">{description}</p>
    <button className="bg-nutri-light-coral border-4 border-nutri-gray rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <DownloadIcon className="w-5 h-5 text-black" />
        <span className="font-architects text-xl text-black">{title}</span>
      </div>
    </button>
  </div>
);

export default function Download() {
  return (
    <div className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="font-architects text-6xl text-black mb-4">
            Get NutriScan
          </h1>
          <p className="font-quicksand text-xl text-nutri-gray max-w-2xl mx-auto">
            Take your health companion with you, wherever you go. Download the
            app on your favorite device.
          </p>
        </section>

        <section className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-12">
          <DownloadOption
            icon={Apple}
            platform="iOS"
            description="Get the app for your iPhone and iPad from the App Store."
            title="Download"
          />
          <DownloadOption
            icon={Smartphone}
            platform="Android"
            description="Available for all Android smartphones and tablets on Google Play."
            title="Download"
          />
          <DownloadOption
            icon={Laptop}
            platform="Windows"
            description="Use NutriScan right on your Windows desktop or laptop."
            title="Download"
          />
        </section>
      </div>
    </div>
  );
} 