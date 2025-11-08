import { Wifi, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero115Props {
  heading?: string;       // <-- Add ?
  description?: string;   // <-- Add ?
  button?: {              // <-- Add ?
    text: string;
    icon?: React.ReactNode;
    url: string;
  };
  trustText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Hero115 = ({
  
  heading = "All In One Solution For Gardening",
  description = "Created a custom workspace of your own to store your plants type ,quantity and price we bring you a community of plant ehtuseiest",
  button = {
    text: "WorkSpace",
    icon: <Zap className="ml-2 size-4" />,
    url: "/plants",
  },
  trustText = "Community which brings together greenery",
  imageSrc = "https://w0.peakpx.com/wallpaper/640/654/HD-wallpaper-plant-vectors-stock-psd-simple-plant-aesthetic.jpg",
  imageAlt = "placeholder",
}: Hero115Props) => {
  return (
    <section className="overflow-hidden py-32 flex justify-center">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute left-1/2 top-1/2 -z-10 mx-auto size-[800px] rounded-full border p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>
            
            <h2 className="mx-auto max-w-5xl text-balance text-center text-3xl font-medium md:text-6xl text-green-400">
              {heading}
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-center md:text-lg">
              {description}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pb-12 pt-3">
              <Button size="lg" asChild>
                <a href={button.url}>
                  {button.text} {button.icon}
                </a>
              </Button>
              {trustText && (
                <div className="text-muted-foreground text-xs">{trustText}</div>
              )}
            </div>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="mx-auto h-full max-h-[524px] w-full max-w-5xl rounded-2xl object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export { Hero115 };
