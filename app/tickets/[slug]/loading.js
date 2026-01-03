export default function Loading() {
  return (
    <main className="flex flex-col gap-3 m-5">
      <div className="border-2 rounded p-3">
        <div className="flex flex-row justify-between">
          <div>
            <div className="skeleton w-100 h-8 mb-2"></div>
            <div className="skeleton w-50 h-5 mb-4"></div>
          </div>
          <div className="skeleton w-50 h-5"></div>
        </div>
        <div className="skeleton w-50 h-5"></div>
        <div className="border-2 rounded m-2 mt-5 p-5">
          <div className="skeleton w-25 h-5 mb-4"></div>
          <div className="skeleton w-100 h-5"></div>
        </div>
      </div>
    </main>
  );
}
