interface FormParamsInterface {
    formRef: React.RefObject<HTMLElement | null>;
    visible: boolean;
    expandHeight: string;
    expandWidth: string;
    collapseHeight: string;
    collapseWidth: string;
    displayType: string;
}

export const handleExpandOrCollapseForm = (params: FormParamsInterface) => {
    const {
        formRef,
        visible,
        expandHeight,
        expandWidth,
        collapseHeight,
        collapseWidth,
        displayType,
    } = params;

    if (formRef.current) {
        if (visible) {
            formRef.current.style.display = displayType;
            setTimeout(() => {
                if (formRef.current) {
                    formRef.current.style.opacity = '1';
                    formRef.current.style.height = expandHeight;
                    formRef.current.style.width = expandWidth;
                }
            }, 200);
        } else {
            formRef.current.style.opacity = '0';
            formRef.current.style.height = collapseHeight;
            formRef.current.style.width = collapseWidth;
            setTimeout(() => {
                if (formRef.current) {
                    formRef.current.style.display = 'none';
                }
            }, 400);
        }
    }
};
