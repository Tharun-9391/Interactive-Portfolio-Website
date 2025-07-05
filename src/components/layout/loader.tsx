export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 animate-spin rounded-full border-t-4 border-b-4 border-primary"></div>
        <h1 className="font-headline text-4xl font-bold text-primary">TT</h1>
      </div>
    </div>
  );
}
