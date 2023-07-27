"use client";

import { setColor, setSize, setUrl } from "@/app/redux/slices/QRGeneratorSlice";
import { StoreTypes } from "../../../../redux/store";
import styles from "./GeneratorOptions.module.scss";
import { useSelector, useDispatch } from "react-redux";

const GeneratorOptions: React.FC = () => {
  const {
    generationOptions: { url, size, color },
  } = useSelector((store: StoreTypes) => store.qrGenerator);

  const dispatch = useDispatch();

  return (
    <form className={styles.generatorOptions}>
      {/* <div className={styles.generatorOptions__type}>
        <span>Type</span>
        <div className="">Types...</div>
      </div> */}

      <label htmlFor="">
        <span>Enter your website URL</span>
        <input
          type="url"
          name=""
          id=""
          placeholder="Enter URL"
          value={url}
          onChange={(e) => dispatch(setUrl(e.target.value))}
          required
        />
      </label>

      {/* <div className={styles.generatorOptions__pattern}>
        <span>Pattern</span>
        <div className="">Patterns...</div>
      </div> */}

      <div className={styles.generatorOptions__size}>
        <span>Size</span>
        <select
          name=""
          id=""
          value={size}
          onChange={(e) => dispatch(setSize(e.target.value))}
          // onChange={(e) => console.log(e.target.value)}
        >
          <option value="200">200x200</option>
          <option value="300">300x300</option>
          <option value="400">400x400</option>
          <option value="500">500x500</option>
          <option value="600">600x600</option>
          <option value="700">700x700</option>
        </select>
      </div>

      <div className={styles.generatorOptions__color}>
        <span>Color</span>
        {/* <div className="">Colors...</div> */}
        <input
          type="color"
          name=""
          id=""
          value={color}
          onChange={(e) => dispatch(setColor(e.target.value))}
          // onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <button className={styles.generatorOptions__submit}>
        Generate QR Code
      </button>
    </form>
    // </div>
  );
};

export default GeneratorOptions;