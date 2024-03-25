export const getRandom = (number: number) => {
    return Math.ceil(Math.random() * number);
}

export const createElement = (tag: string, className?: string): HTMLElement | HTMLImageElement => {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

export const getTime = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
}
