import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

const assets: Record<
  string,
  { type: "image" | "pdf"; src: string; title: string }
> = {
  "pasta-and-pour": {
    type: "image",
    src: "/cryptex.jpeg",
    title: "Cryptex UI/UX – Certificate",
  },
  travora: {
    type: "pdf",
    src: "/sih.pdf",
    title: "SIH 2025 – Internal Round Certificate",
  },
};

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const asset = assets[slug];
  if (!asset) return {};
  return {
    title: asset.title,
    description: "Certificate preview",
  };
}

export default async function CertificateViewerPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const asset = assets[slug];
  if (!asset) return notFound();

  if (asset.type === "image") {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-semibold mb-4">{asset.title}</h1>
        <div className="relative w-full max-w-4xl">
          <Image
            src={asset.src}
            alt={asset.title}
            width={1600}
            height={1200}
            className="rounded-lg border"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold mb-4">{asset.title}</h1>
      <div className="w-full h-[80vh] rounded-lg overflow-hidden border">
        <iframe
          src={asset.src}
          title={asset.title}
          className="w-full h-full"
        />
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        If the PDF does not render,{" "}
        <a href={asset.src} target="_blank" rel="noopener noreferrer" className="underline">
          open it directly
        </a>
        .
      </p>
    </div>
  );
}
