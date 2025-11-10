import Navbar from "@/app/(public)/Navbar";
import AppContainer from "@/components/Ui/Appcontainer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppContainer>
      <Navbar />
      {children}
    </AppContainer>
  );
}
