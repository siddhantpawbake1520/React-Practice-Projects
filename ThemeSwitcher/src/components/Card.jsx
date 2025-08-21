export default function Card() {
  return (
    <div className="
      w-full bg-white border border-gray-200 rounded-lg shadow
      dark:bg-gray-800 dark:border-gray-700
    ">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="https://live.staticflickr.com/3552/3325635275_4078db19a6_b.jpg"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Lorem ipsum dolor sit amet consectetur.
          </h5>
        </a>

        <div className="flex items-center mt-2.5 mb-5">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < 4 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"} mr-1`}
                aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="..." />
            </svg>
          ))}
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="..." />
          </svg>
          <span className="
            bg-blue-100 text-blue-800 text-xs font-semibold mr-2
            px-2.5 py-0.5 rounded ml-3 dark:bg-blue-200 dark:text-blue-800
          ">
            4.0
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="
              text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
              focus:outline-none focus:ring-blue-300 font-medium
              rounded-lg text-sm px-5 py-2.5 text-center
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
