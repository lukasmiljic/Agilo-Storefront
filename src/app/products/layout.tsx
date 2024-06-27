import Header from "@/components/common/header";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
}
