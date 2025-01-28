import Footer from "@/components/ui/shared/Footer"
import Header from "@/components/ui/shared/Header"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    /* items-center flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8 */
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}