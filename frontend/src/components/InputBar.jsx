export const InputBar = ({ onChange, placeholder, label, isTextarea = false }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {isTextarea ? (
        <textarea
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          rows="5"
        />
      ) : (
        <input
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
        />
      )}
    </div>
  );
  