export default function MainSkeleton() {
  return (
    <main className="px-5 flex flex-col gap-3 lg:container lg:mx-auto">
      {/* search & filters skeleton */}
      <div className="border-2 rounded p-5">
        <div className="flex flex-row">
          <div className="skeleton w-full h-10"></div>
        </div>
        <div className="flex flex-col md:flex-row pt-4">
          <div className="flex gap-3">
            <div className="skeleton h-10 w-30"></div>
            <div className="skeleton h-10 w-30"></div>
            <div className="skeleton h-10 w-47"></div>
            <div className="skeleton h-10 w-27"></div>
          </div>
          <div className="skeleton h-10 w-20 self-center mx-5 mt-5 md:mt-auto"></div>
        </div>
      </div>
      <div className="border-2 rounded w-full p-5">
        {/* table skeleton */}
        <div className="skeleton min-w-full w-100 h-100"></div>
      </div>
    </main>
  );
}
