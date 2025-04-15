import { getCurrentWindow } from "@tauri-apps/api/window";
import { useAppWindowStore } from '@/stores/appWindowStore.ts';

export default function useDragButton() {
	const { setDragging } = useAppWindowStore();
	const appWindow = getCurrentWindow();

	const startDragging = () => {
		appWindow.startDragging();
	};

	const stopDragging = () => {
		setDragging(false);
	}

	return {
		startDragging,
		stopDragging
	};
}
