function getFullYear() {
    return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex === true) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
}

const getLatestNotification = () => '<strong>Urgent requirement</strong> - complete by EOD';

export { getFullYear, getFooterCopy, getLatestNotification };
