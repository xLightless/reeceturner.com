interface ListItemProps {
    arg1: string;
    arg2: string;
    arg3: string;
    arg4: string;
}

interface ListPictureItemProps {
    imageSrc: string;
    imageAlt?: string;
    title: string;
    createdAt: string;
    description: string;
}

const ListPictureItem: React.FC<ListPictureItemProps> = (props) => {
    return (
        <li className="w-full p-4 hover:bg-gray-800 hover:cursor-pointer rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4">
                {/* Small Image */}
                <div className="flex justify-start items-start">
                    <img
                        src={props.imageSrc}
                        alt={props.imageAlt || ''}
                        className="w-full sm:w-[173px] h-auto rounded object-cover"
                    />
                </div>

                {/* Occupation and Description */}
                <div className="grid grid-rows-[auto_1fr]">
                    <div className="flex flex-row items-center gap-2 min-w-0">
                        <h2 className="font-bold text-base sm:text-lg truncate min-w-0 whitespace-nowrap overflow-ellipsis">
                            {props.title} &bull; {props.createdAt}
                        </h2>
                    </div>
                    <p className="text-sm text-slate-400 mt-2 sm:mt-0">
                        {props.description}
                    </p>
                </div>
            </div>
        </li>
    );
};

const ListItem: React.FC<ListItemProps> = (props) => {
    return (
        <li className="w-full p-4 hover:bg-gray-800 hover:cursor-pointer rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4">
            {/* Date X -> Y */}
            <div className="flex justify-start items-start">
                <p className="font-bold text-slate-500 text-sm">{props.arg1}</p>
            </div>

            {/* Occupation and Description */}
            <div className="grid grid-rows-[auto_1fr]">
                <div className="flex flex-row items-center gap-2 min-w-0">
                <h2 className="font-bold text-base sm:text-lg truncate min-w-0 whitespace-nowrap overflow-ellipsis">
                    {props.arg2} &bull; {props.arg3}
                </h2>
                </div>
                <p className="text-sm text-slate-400 mt-2 sm:mt-0">
                {props.arg4}
                </p>
            </div>
            </div>
        </li>
    )
};

export {
    ListItem,
    ListPictureItem
}