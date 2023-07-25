import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { CatalogItemView } from 'entities/CatalogItem/model/types/CatalogItemSchema';
import cls from './CatalogViewSelector.module.scss';

interface CatalogItemViewSelectorProps {
    className?: string;
    view: CatalogItemView,
    onViewClick?: (view: CatalogItemView) => void;
}

const viewTypes = [
    {
        view: CatalogItemView.SMALL,
        icon: TiledIcon,
    },
    {
        view: CatalogItemView.BIG,
        icon: ListIcon,
    },
];

export const CatalogViewSelector = memo((props: CatalogItemViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: CatalogItemView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.CatalogItemViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});
