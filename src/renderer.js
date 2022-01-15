import { ipcRenderer } from "electron";

const updateCode = async code => {
  let transpiledCode = '';
  try {
    transpiledCode = await ipcRenderer.invoke('transform',code);
  }
  catch(e) { transpiledCode = e.message; }
  return transpiledCode;
}


export default { updateCode };
