type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div>
      <h4 className="text-md font-semibold mb-2">MaxPrice</h4>
      <select
        value={selectedPrice}
        onChange={(event) =>
          onChange(
            event.target.value ? parseInt(event.target.value) : undefined
          )
        }
      >
        <option value="">Select Max price</option>
        {[50, 100, 200, 300, 500].map((price) => (
          <option value={price}>{price}</option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
