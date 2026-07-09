const suggestions = [
  "Tell me about Bioriidl",
  "Lab Facilities",
  "Funding Support",
  "Incubation Programs",
];

export default function SuggestedQuestions({
  onSelect,
}) {
  return (
    <div className="mb-6">

      <h3 className="font-semibold text-slate-900">
        Welcome to Bioriidl
      </h3>

      <p className="text-sm text-slate-500 mt-1">
        Ask about facilities, startups,
        funding and incubation support.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">

        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className="
            bg-white
            border
            border-slate-200
            rounded-full
            px-4
            py-2
            text-sm
            hover:border-red-300"
          >
            {item}
          </button>
        ))}

      </div>

    </div>
  );
}