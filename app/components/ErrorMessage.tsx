export function ErrorMessage({ error }: { error: string }) {
  return (
    <div className="w-full p-6 bg-red-900/20 rounded-xl shadow-lg">
      <div className="text-red-400 text-center">
        <span className="font-semibold">Error:</span> {error}
      </div>
    </div>
  );
}
