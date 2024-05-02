import {Character} from "../character/Character";

const Characters = () => {
    return (
        <div>
            <Character name={'Bart'} img={'https://www.shutterstock.com/image-vector/bart-simpson-cartoon-character-editorial-600nw-2392134361.jpg'}/>
            <Character name={'Homer'} img={'https://www.pngall.com/wp-content/uploads/14/Homer-Simpson-PNG-Photo.png'}/>
            <Character name={'Marge'} img={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}>
                Lorem ipsum dolor sit amet.
            </Character>
        </div>
    );
};

export {Characters};