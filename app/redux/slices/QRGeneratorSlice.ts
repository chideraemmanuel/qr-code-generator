import { createSlice } from "@reduxjs/toolkit";

export interface QrGeneratorStateTypes {
  downloadSource: string;
  previewImageSrc: string;
  generationOptions: {
    url: string;
    size: string;
    color: string;
  };
}

const initialState: QrGeneratorStateTypes = {
  previewImageSrc: "",
  downloadSource: "",
  generationOptions: {
    url: "",
    size: "300",
    color: "#000000",
  },
};

const QRGeneratorSlice = createSlice({
  name: "qrGenerator",
  initialState,
  reducers: {
    setUrl: (state: QrGeneratorStateTypes, action) => {
      state.generationOptions.url = action.payload;
    },
    setSize: (state: QrGeneratorStateTypes, action) => {
      state.generationOptions.size = action.payload;
    },
    setColor: (state: QrGeneratorStateTypes, action) => {
      state.generationOptions.color = action.payload;
    },
    setPreviewImageSrc: (
      state: QrGeneratorStateTypes,
      action: { payload: string }
    ) => {
      state.previewImageSrc = action.payload;
    },
  },
});

export const { setUrl, setSize, setColor, setPreviewImageSrc } =
  QRGeneratorSlice.actions;

export default QRGeneratorSlice.reducer;
