
export function renderNestedList(data) {
  
  const renderItem = (item) => {
    if (Array.isArray(item)) {
      return (
        <ul className="ml-6 list-disc">
          {item.map((val, i) => (
            <li key={i}>{renderItem(val)}</li>
          ))}
        </ul>
      );
    } else if (item && typeof item === 'object') {
      return (
        <ul className="ml-6 list-disc">
          {Object.entries(item).map(([key, val]) => (
            <li key={key}>
              <strong>{key}:</strong> {typeof val === 'object' ? renderItem(val) : String(val)}
            </li>
          ))}
        </ul>
      );
    } else {
      return <>{String(item)}</>;
    }
  };

  return renderItem(data);
}