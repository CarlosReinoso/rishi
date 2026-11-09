export const metadata = {
  title: "Website Editor | The Speech Heroes",
  robots: { index: false, follow: false },
};

export default function EditorLayout({ children }) {
  return (
    <>
      <style>{`nav, footer { display: none !important; }`}</style>
      {children}
    </>
  );
}
