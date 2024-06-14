import DeviceDetector from "device-detector-js";
import { isbot } from "isbot";
const deviceDetector = new DeviceDetector();
const device = deviceDetector.parse(window.navigator.userAgent);

window.isbot = isbot(window.navigator.userAgent);
window.platform = device;