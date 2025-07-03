import {
  Lightbulb,
  Settings,
  Beaker,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Globe,
  Palette,
  Pencil,
  Leaf,
  Heart,
  TrendingUp,
  Facebook,
  Download,
  Apple,
  Smartphone,
  ArrowDown,
} from "lucide-react";

export default function About() {
  const TeamMember = ({
    name,
    role,
    image,
    social1Icon: Social1,
    social2Icon: Social2,
    social1Color,
    social2Color,
  }: {
    name: string;
    role: string;
    image: string;
    social1Icon: any;
    social2Icon: any;
    social1Color: string;
    social2Color: string;
  }) => (
    <div className="w-full max-w-[287px] h-[261px] rounded-lg border-2 border-[#555] bg-white shadow-lg">
      <div className="flex flex-col items-center p-5">
        <div className="w-[98px] h-[98px] rounded-full border-2 border-[#555] bg-white flex items-center justify-center mb-3 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-[94px] h-[94px] rounded-full object-cover"
          />
        </div>
        <h3 className="font-caveat text-xl text-[#555] text-center mb-1">
          {name}
        </h3>
        <p className="font-caveat text-lg text-[#555] text-center mb-4">
          {role}
        </p>
        <div className="flex gap-2">
          <div
            className={`w-8 h-8 rounded-full ${social1Color} border-0 flex items-center justify-center`}
          >
            <Social1 className="w-4 h-4 text-[#555]" />
          </div>
          <div
            className={`w-8 h-8 rounded-full ${social2Color} border-0 flex items-center justify-center`}
          >
            <Social2 className="w-4 h-4 text-[#555]" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Main Content */}
      <main className="px-20 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Mission Section */}
          <section className="flex flex-col items-center gap-7 mb-16">
            <div className="bg-[#FEF3C7] border-2 border-[#555] rounded-lg px-9 py-5 shadow-lg">
              <h1 className="font-caveat text-5xl text-[#555] text-center">
                Our Mission
              </h1>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-2 border-[#555] bg-white shadow-lg flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bb4189dcb73c4cc23a9d8482cdef367e32538fc?width=376"
                  alt="Scribbles character"
                  className="w-[188px] h-[188px] rounded-full object-cover"
                />
              </div>

              {/* Speech bubbles */}
              <div className="absolute -top-8 right-12 bg-[#FCE7F3] border border-[#555] rounded-lg px-3 py-2">
                <p className="font-caveat text-lg text-[#555] whitespace-nowrap">
                  Hi there!
                </p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#DBEAFE] border border-[#555] rounded-lg px-3 py-2">
                <p className="font-caveat text-lg text-[#555] whitespace-nowrap">
                  I'm Scribbles!
                </p>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="flex flex-col items-center gap-12 mb-16">
            {/* Why we built this */}
            <div className="relative w-full max-w-4xl">
              <div className="bg-white border-2 border-[#555] rounded-lg p-7 shadow-lg">
                <h2 className="font-caveat text-3xl text-[#555] mb-4">
                  Why we built this
                </h2>
                <div className="border-l-4 border-[#FEF3C7] pl-3 space-y-4">
                  <p className="font-quicksand text-base text-[#555] leading-6">
                    We were tired of boring, sterile apps that all looked the
                    same. We wanted to create something that felt human, warm,
                    and brought a smile to your face.
                  </p>
                  <p className="font-quicksand text-base text-[#555] leading-6">
                    NutriScan was born from our love of doodling and the charm of
                    hand-drawn designs. We believe digital tools should have
                    personality and spark joy!
                  </p>
                </div>
              </div>

              <div className="absolute -left-9 -top-9 w-[70px] h-[70px] rounded-full border-2 border-[#555] bg-[#FEF3C7] flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-[#555]" />
              </div>
            </div>

            {/* How it works */}
            <div className="relative w-full max-w-4xl ml-16">
              <div className="bg-white border-2 border-[#555] rounded-lg p-7 shadow-lg">
                <h2 className="font-caveat text-3xl text-[#555] mb-4">
                  How it works
                </h2>
                <div className="border-l-4 border-[#DBEAFE] pl-3 space-y-4">
                  <p className="font-quicksand text-base text-[#555] leading-6">
                    NutriScan combines the charm of hand-drawn elements with
                    powerful digital tools. Each component is carefully crafted
                    to look like it was sketched on paper.
                  </p>
                  <p className="font-quicksand text-base text-[#555] leading-6">
                    Our library includes buttons, cards, forms, and other UI
                    elements that you can mix and match to create delightful
                    user experiences. Just drag, drop, and customize!
                  </p>
                </div>
              </div>

              <div className="absolute -left-9 -top-9 w-[67px] h-[67px] rounded-full border-2 border-[#555] bg-[#DBEAFE] flex items-center justify-center">
                <Settings className="w-6 h-6 text-[#555]" />
              </div>
            </div>

            {/* The Science Behind It */}
            <div className="relative w-full max-w-4xl">
              <div className="bg-white border-2 border-[#555] rounded-lg p-7 shadow-lg">
                <h2 className="font-caveat text-3xl text-[#555] mb-4">
                  The Science Behind It
                </h2>
                <div className="border-l-4 border-[#D1FAE5] pl-3 space-y-4">
                  <p className="font-quicksand text-base text-[#555] leading-6">
                    Research shows that playful interfaces increase user
                    engagement and satisfaction. The human touch in our design
                    creates an emotional connection that keeps users coming
                    back.
                  </p>
                  <p className="font-quicksand text-base text-[#555] leading-6">
                    We've studied cognitive psychology principles to ensure our
                    whimsical design doesn't compromise usability. The result is
                    a UI that's both fun and functional!
                  </p>
                </div>
              </div>

              <div className="absolute -left-9 -top-9 w-[70px] h-[70px] rounded-full border-2 border-[#555] bg-[#D1FAE5] flex items-center justify-center">
                <Beaker className="w-6 h-6 text-[#555]" />
              </div>
            </div>
          </section>

          {/* Meet Our Team */}
          <section className="mb-16">
            <div className="bg-[#FCE7F3] border-2 border-[#555] rounded-lg px-7 py-3 mb-8 inline-block">
              <h2 className="font-caveat text-4xl text-[#555]">
                Meet Our Team
              </h2>
            </div>

            <div className="flex justify-center">
              <TeamMember
                name="Mikasa"
                role="Creative Director"
                image="/mikasa.jpg"
                social1Icon={Twitter}
                social2Icon={Instagram}
                social1Color="bg-[#DBEAFE]"
                social2Color="bg-[#FCE7F3]"
              />
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-[#FEF3C7] border-2 border-[#555] rounded-lg p-8 shadow-lg">
                <h2 className="font-caveat text-3xl text-[#555] text-center mb-6">
                  What People Are Saying
                </h2>

                <div className="text-center mb-8">
                  <p className="font-caveat text-2xl text-[#555] mb-1">
                    "NutriScan completely transformed our app! Users love the
                    playful
                  </p>
                  <p className="font-caveat text-2xl text-[#555] mb-1">
                    interface and we've seen a 40% increase in engagement since
                  </p>
                  <p className="font-caveat text-2xl text-[#555]">
                    switching."
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full border-2 border-[#555] bg-white overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e31fc829ed1bfd83764d4ff97e56344e975506?width=122"
                      alt="Sarah Williams"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-caveat text-lg text-[#555] leading-7">
                      joyboy
                    </p>
                    <p className="font-caveat text-base text-[#555] leading-6">
                      Product Manager at NutriScan
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-4 w-14 h-14 rounded-full border-2 border-[#555] bg-white flex items-center justify-center">
                <div className="text-[#555]">💡</div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full border-2 border-[#555] bg-white flex items-center justify-center">
                <div className="text-[#555]">💡</div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white border-2 border-[#555] rounded-lg p-8 shadow-lg text-center">
                <h2 className="font-caveat text-3xl text-[#555] mb-2">
                  Ready to add some personality to your
                </h2>
                <h2 className="font-caveat text-3xl text-[#555] mb-6">
                  project?
                </h2>

                <p className="font-quicksand text-base text-[#555] mb-2">
                  Join thousands of designers and developers who are creating
                  delightful
                </p>
                <p className="font-quicksand text-base text-[#555] mb-8">
                  experiences with NutriScan!
                </p>

                <div className="flex justify-center gap-4">
                  <button className="bg-[#DBEAFE] border-2 border-[#555] rounded-lg px-7 py-4 shadow hover:shadow-lg transition-all">
                    <span className="font-caveat text-xl text-[#555]">
                      Get Started
                    </span>
                  </button>

                  <button className="bg-[#FCE7F3] border-2 border-[#555] rounded-lg px-7 py-4 shadow hover:shadow-lg transition-all">
                    <span className="font-caveat text-xl text-[#555]">
                      See Examples
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
