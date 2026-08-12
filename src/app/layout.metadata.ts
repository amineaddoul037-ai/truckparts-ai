export const metadata = {
  title: 'TruckParts AI',
  description: 'Find the right truck part. Premium OEM reference search and compatibility checking.',
  keywords: 'truck parts, OEM references, compatibility, Volvo, DAF, Scania, MAN, Mercedes, Renault, Iveco',
  openGraph: {
    title: 'TruckParts AI',
    description: 'Find the right truck part',
    type: 'website',
    url: 'https://truckparts-ai.vercel.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
