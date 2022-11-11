const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} || Dr.Erin`;
    }, [title])
};

export default useTitle;