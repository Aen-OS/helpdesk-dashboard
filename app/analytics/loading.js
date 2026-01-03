export default function Loading() {
  return (
    <div className="px-5 lg:container lg:mx-auto py-8 font-sans">
      <div className="text-3xl font-bold font-mono mb-8">
        IT Helpdesk Analytics
      </div>

      <div className="grid grid-cols-2">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          <div className="bg-gray-100 p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Total Tickets</h2>
            <div className="skeleton bg-gray-200 h-10 w-10"></div>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Open Tickets</h2>
            <div className="skeleton bg-gray-200 h-10 w-10"></div>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Closed Tickets</h2>
            <div className="skeleton bg-gray-200 h-10 w-10"></div>
          </div>
        </div>
      </div>

      {/* Priority Distribution */}
      <div className="bg-gray-100 p-4 rounded shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Tickets by Priority</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-medium">P1 (Critical)</h3>
            <div className="skeleton bg-gray-200 h-8 w-7"></div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-medium">P2 (High)</h3>
            <div className="skeleton bg-gray-200 h-8 w-7"></div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-medium">P3 (Medium)</h3>
            <div className="skeleton bg-gray-200 h-8 w-7"></div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="font-medium">P4 (Low)</h3>
            <div className="skeleton bg-gray-200 h-8 w-7"></div>
          </div>
        </div>
      </div>

      {/* IT Engineer Stats */}
      <div className="bg-gray-100 p-4 rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-4">This Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="text-lg hover:underline cursor-pointer">
              Sarah Chen
            </h3>
            <div className="flex flex-row gap-1">
              <p>Open:</p> <div className="skeleton bg-gray-200 h-5 w-3"></div>
            </div>
            <div className="flex flex-row gap-1">
              <p>Closed:</p>{" "}
              <div className="skeleton bg-gray-200 h-5 w-3"></div>
            </div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="text-lg hover:underline cursor-pointer">
              James Wilson
            </h3>
            <div className="flex flex-row gap-1">
              <p>Open:</p> <div className="skeleton bg-gray-200 h-5 w-3"></div>
            </div>
            <div className="flex flex-row gap-1">
              <p>Closed:</p>{" "}
              <div className="skeleton bg-gray-200 h-5 w-3"></div>
            </div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="text-lg hover:underline cursor-pointer">
              Lisa Wang
            </h3>
            <div className="flex flex-row gap-1">
              <p>Open:</p> <div className="skeleton bg-gray-200 h-5 w-3"></div>
            </div>
            <div className="flex flex-row gap-1">
              <p>Closed:</p>{" "}
              <div className="skeleton bg-gray-200 h-5 w-3"></div>
            </div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="text-lg hover:underline cursor-pointer">
              Mark Thompson
            </h3>
            <div className="flex flex-row gap-1">
              <p>Open:</p> <div className="skeleton bg-gray-200 h-5 w-3"></div>
            </div>
            <div className="flex flex-row gap-1">
              <p>Closed:</p>{" "}
              <div className="skeleton bg-gray-200 h-5 w-3"></div>
            </div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-300">
            <h3 className="text-lg hover:underline cursor-pointer">
              Olivia Martinez
            </h3>
            <div className="flex flex-row gap-1">
              <p>Open:</p> <div className="skeleton bg-gray-200 h-5 w-3"></div>
            </div>
            <div className="flex flex-row gap-1">
              <p>Closed:</p>{" "}
              <div className="skeleton bg-gray-200 h-5 w-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
