import { makeStyles } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { ReviewDecision } from '../types';

export default function ReviewDecisionIcon({ reviewDecision }: { reviewDecision: ReviewDecision }) {
	const classes = useStyles();

	switch (reviewDecision) {
		case ReviewDecision.APPROVED:
			return <CheckCircleIcon className={classes.icon} style={{ color: 'green' }} />;
		case ReviewDecision.CHANGES_REQUESTED:
			return <CancelIcon className={classes.icon} color="error" />;
		case ReviewDecision.REVIEW_REQUIRED:
			return <ChatBubbleIcon className={classes.icon} color="disabled" />;
		default:
			return <></>;
	}
}

const useStyles = makeStyles(() => ({
	icon: {
		width: '50px',
		height: '50px',
	},
}));
