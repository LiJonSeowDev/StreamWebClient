type Stream = {
    id : number,
    title : string,
    description : string,
    userID : string
}

interface StreamDict<TValue> {
    [key: string]: TValue;
}

interface FormErrors<TValue> {
    [key: string]: TValue;
}

interface Props { };