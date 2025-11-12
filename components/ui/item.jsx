import *'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

function ItemGroup({ className, ...props }'div'>) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn('group/item-group flex flex-col', className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn('my-0', className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  'group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a&]-accent/50 [a&]-colors duration-100 flex-wrap outline-none focus-visible-ring focus-visible-ring/50 focus-visible-[3px]',
  {
    variants'bg-transparent',
        outline'border-border',
        muted'bg-muted/50',
      },
      size'p-4 gap-4 ',
        sm'py-3 px-4 gap-2.5',
      },
    },
    defaultVariants'default',
      size'default',
    },
  },
)

function Item({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}'div'> &
  VariantProps& { asChild?) {
  const Comp = asChild ? Slot 'div'
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  'flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item-start [&_svg]-events-none group-has-[[data-slot=item-description]]/item-y-0.5',
  {
    variants'bg-transparent',
        icon"size-8 border rounded-sm bg-muted [&_svg([class*='size-'])]-4",
        image'size-10 rounded-sm overflow-hidden [&_img]-full [&_img]-cover',
      },
    },
    defaultVariants'default',
    },
  },
)

function ItemMedia({
  className,
  variant = 'default',
  ...props
}'div'> & VariantProps) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }'div'>) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        'flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]-none',
        className,
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }'div'>) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-medium',
        className,
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }'p'>) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        'text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance',
        '[&>a-primary [&>a]&>a]-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }'div'>) {
  return (
    <div
      data-slot="item-actions"
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }'div'>) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        'flex basis-full items-center justify-between gap-2',
        className,
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }'div'>) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        'flex basis-full items-center justify-between gap-2',
        className,
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
