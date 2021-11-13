import { Box } from '@material-ui/core';
import { toast, ToastPosition } from 'react-toastify';

const defaults = {
	autoClose: 4000,
	draggable: false,
	position: 'bottom-center' as ToastPosition,
	hideProgressBar: true,
};

const MessageWithRefresh = ({ content = '' }: { content: string }) => (
	<Box>
		<p>{content}</p>
	</Box>
);

function refreshPage() {
	window.location.reload();
}

function redirect() {
	window.location.href = '/';
}

function errorToast(content: string) {
	toast(content, {
		...defaults,
		type: 'error',
	});
}

export { errorToast };
