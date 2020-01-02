import {ThemeInterface} from "redoc/typings/theme";
import { darken, desaturate, lighten, readableColor, transparentize } from 'polished';

export const defaultTheme: ThemeInterface = {
    spacing: {
        unit: 5,
        sectionHorizontal: ({ spacing }) => spacing.unit * 8,
        sectionVertical: ({ spacing }) => spacing.unit * 8,
    },
    breakpoints: {
        small: '50rem',
        medium: '85rem',
        large: '105rem',
    },
    colors: {
        tonalOffset: 0.3,
        primary: {
            main: '#32329F',
            light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
            dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
            contrastText: ({ colors }) => readableColor(colors.primary.main),
        },
        success: {
            main: '#00aa13',
            light: ({ colors }) => lighten(colors.tonalOffset, colors.success.main),
            dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
            contrastText: ({ colors }) => readableColor(colors.success.main),
        },
        warning: {
            main: '#d4ad03',
            light: ({ colors }) => lighten(colors.tonalOffset, colors.warning.main),
            dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
            contrastText: '#ffffff',
        },
        error: {
            main: '#e53935',
            light: ({ colors }) => lighten(colors.tonalOffset, colors.error.main),
            dark: ({ colors }) => darken(colors.tonalOffset, colors.error.main),
            contrastText: ({ colors }) => readableColor(colors.error.main),
        },
        text: {
            primary: '#333333',
            secondary: ({ colors }) => lighten(colors.tonalOffset, colors.text.primary),
        },
        border: {
            dark: 'rgba(0,0,0, 0.1)',
            light: '#ffffff',
        },
        responses: {
            success: {
                color: ({ colors }) => colors.success.main,
                backgroundColor: ({ colors }) => transparentize(0.9, colors.success.main),
            },
            error: {
                color: ({ colors }) => colors.error.main,
                backgroundColor: ({ colors }) => transparentize(0.9, colors.error.main),
            },
            redirect: {
                color: '#ffa500',
                backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.redirect.color),
            },
            info: {
                color: '#87ceeb',
                backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.info.color),
            },
        },
        http: {
            get: '#6bbd5b',
            post: '#248fb2',
            put: '#9b708b',
            options: '#d3ca12',
            patch: '#e09d43',
            delete: '#e27a7a',
            basic: '#999',
            link: '#31bbb6',
            head: '#c167e4',
        },
    },
    schema: {
        linesColor: theme =>
            lighten(
                theme.colors.tonalOffset,
                desaturate(theme.colors.tonalOffset, theme.colors.primary.main),
            ),
        defaultDetailsWidth: '75%',
        typeNameColor: theme => theme.colors.text.secondary,
        typeTitleColor: theme => theme.schema.typeNameColor,
        requireLabelColor: theme => theme.colors.error.main,
        labelsTextSize: '0.9em',
        nestingSpacing: '1em',
        nestedBackground: '#fafafa',
        arrow: {
            size: '1.1em',
            color: theme => theme.colors.text.secondary,
        },
    },
    typography: {
        fontSize: '14px',
        lineHeight: '1.5em',
        fontWeightRegular: '400',
        fontWeightBold: '600',
        fontWeightLight: '300',
        fontFamily: 'Roboto, sans-serif',
        smoothing: 'antialiased',
        optimizeSpeed: true,
        headings: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '400',
            lineHeight: '1.6em',
        },
        code: {
            fontSize: '13px',
            fontFamily: 'Courier, monospace',
            lineHeight: ({ typography }) => typography.lineHeight,
            fontWeight: ({ typography }) => typography.fontWeightRegular,
            color: '#e53935',
            backgroundColor: 'rgba(38, 50, 56, 0.05)',
            wrap: true,
        },
        links: {
            color: ({ colors }) => colors.primary.main,
            visited: ({ typography }) => typography.links.color,
            hover: ({ typography }) => lighten(0.2, typography.links.color),
        },
    },
    menu: {
        width: '220px',
        backgroundColor: '#fafafa',
        textColor: '#333333',
        activeTextColor: theme =>
            theme.menu.textColor !== defaultTheme.menu!.textColor
                ? theme.menu.textColor
                : theme.colors.primary.main,
        groupItems: {
            textTransform: 'uppercase',
        },
        level1Items: {
            textTransform: 'none',
        },
        arrow: {
            size: '1.5em',
            color: theme => theme.menu.textColor,
        },
    },
    logo: {
        maxHeight: ({ menu }) => menu.width,
        maxWidth: ({ menu }) => menu.width,
        gutter: '2px',
    },
    rightPanel: {
        backgroundColor: '#263238',
        width: '40%',
        textColor: '#ffffff',
    },
    codeSample: {
        backgroundColor: ({ rightPanel }) => darken(0.1, rightPanel.backgroundColor),
    },
};