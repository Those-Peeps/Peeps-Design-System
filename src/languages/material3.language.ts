import type { DesignLanguageContract } from '../contracts/design-language.contract';

/**
 * Material Design 3 Language Implementation for Peeps
 *
 * Source colors from brand palette:
 * - Primary (Blue): #5C9DF2
 * - Secondary (Yellow): #F2E205
 * - Tertiary (Orange): #F29F05
 * - Error (Red): #F20505
 * - Accent (Golden Orange): #F2B705
 *
 * Generated tonal palettes based on Material Design 3 principles
 */
export const material3Language: DesignLanguageContract = {
  name: 'material3',
  version: '1.0.0',

  colors: {
    // Primary - Blue (#5C9DF2)
    primary: {
      0: '#000000',
      10: '#001A41',
      20: '#002D6B',
      30: '#004196',
      40: '#0056C2',
      50: '#1D6EE8',
      60: '#5C9DF2',
      70: '#81B5F5',
      80: '#A8CEF8',
      90: '#D4E7FC',
      95: '#EAF3FE',
      99: '#F9FCFF',
      100: '#FFFFFF'
    },
    // Secondary - Yellow (#F2E205)
    secondary: {
      0: '#000000',
      10: '#3D3400',
      20: '#6B5A00',
      30: '#998000',
      40: '#C7A600',
      50: '#E8C800',
      60: '#F2D900',
      70: '#F2E205',
      80: '#F5E83D',
      90: '#F8F070',
      95: '#FBF7A3',
      99: '#FFFEF5',
      100: '#FFFFFF'
    },
    // Tertiary - Orange (#F29F05)
    tertiary: {
      0: '#000000',
      10: '#3D2400',
      20: '#6B4100',
      30: '#995E00',
      40: '#C77C00',
      50: '#E89100',
      60: '#F29F05',
      70: '#F5B23D',
      80: '#F8C770',
      90: '#FBDCA3',
      95: '#FDEDD1',
      99: '#FFF9F5',
      100: '#FFFFFF'
    },
    // Neutral - Derived from Primary
    neutral: {
      0: '#000000',
      10: '#1B1B1F',
      20: '#303034',
      30: '#46464A',
      40: '#5E5E62',
      50: '#77777B',
      60: '#919095',
      70: '#ABABAF',
      80: '#C7C6CA',
      90: '#E3E2E6',
      95: '#F2F0F4',
      99: '#FDFBFF',
      100: '#FFFFFF'
    },
    // Neutral Variant - Derived from Primary
    neutralVariant: {
      0: '#000000',
      10: '#1A1B23',
      20: '#2F3039',
      30: '#454650',
      40: '#5D5E67',
      50: '#767680',
      60: '#8F909A',
      70: '#AAABB5',
      80: '#C5C6D0',
      90: '#E2E2EC',
      95: '#F0F0FA',
      99: '#FDFBFF',
      100: '#FFFFFF'
    },
    // Error - Red/Orange (#F23005)
    error: {
      0: '#000000',
      10: '#410E0B',
      20: '#601410',
      30: '#8C1D18',
      40: '#B3261E',
      50: '#DC362E',
      60: '#E46962',
      70: '#EC928E',
      80: '#F2B8B5',
      90: '#F9DEDC',
      95: '#FCEEEE',
      99: '#FFFBF9',
      100: '#FFFFFF'
    }
  },

  semantic: {
    // Light theme semantic colors (using tone 60-70 for vibrant appearance, WCAG AA)
    primary: '#5C9DF2',
    onPrimary: '#002D6B',
    primaryContainer: '#EAF3FE',
    onPrimaryContainer: '#001A41',

    secondary: '#F2E205',
    onSecondary: '#6B5A00',
    secondaryContainer: '#FBF7A3',
    onSecondaryContainer: '#3D3400',

    tertiary: '#F29F05',
    onTertiary: '#6B4100',
    tertiaryContainer: '#FDEDD1',
    onTertiaryContainer: '#3D2400',

    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410E0B',

    surface: '#FDFBFF',
    onSurface: '#1B1B1F',
    surfaceVariant: '#E2E2EC',
    onSurfaceVariant: '#45464F',

    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F7F5FA',
    surfaceContainer: '#F1EFF4',
    surfaceContainerHigh: '#EBEAEF',
    surfaceContainerHighest: '#E6E4E9',

    outline: '#767680',
    outlineVariant: '#C5C6D0',

    inverseSurface: '#303034',
    inverseOnSurface: '#F2F0F4',
    inversePrimary: '#A8CEF8',

    background: '#FDFBFF',
    onBackground: '#1B1B1F',

    scrim: '#000000',
    shadow: '#000000'
  },

  // Dark theme semantic colors
  semanticDark: {
    primary: '#A8CEF8',
    onPrimary: '#002D6B',
    primaryContainer: '#004196',
    onPrimaryContainer: '#D4E7FC',

    secondary: '#F5E83D',
    onSecondary: '#6B5A00',
    secondaryContainer: '#998000',
    onSecondaryContainer: '#F8F070',

    tertiary: '#F8C770',
    onTertiary: '#6B4100',
    tertiaryContainer: '#995E00',
    onTertiaryContainer: '#FBDCA3',

    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFDAD6',

    surface: '#131316',
    onSurface: '#E6E4E9',
    surfaceVariant: '#45464F',
    onSurfaceVariant: '#C5C6D0',

    surfaceContainerLowest: '#0E0E11',
    surfaceContainerLow: '#1B1B1F',
    surfaceContainer: '#1F1F23',
    surfaceContainerHigh: '#2A292D',
    surfaceContainerHighest: '#353438',

    outline: '#8F909A',
    outlineVariant: '#45464F',

    inverseSurface: '#E6E4E9',
    inverseOnSurface: '#303034',
    inversePrimary: '#5C9DF2',

    background: '#131316',
    onBackground: '#E6E4E9',

    scrim: '#000000',
    shadow: '#000000'
  },

  typography: {
    fonts: {
      display: '"Fauna One", Georgia, serif',
      body: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", Consolas, monospace'
    },
    scale: {
      displayLarge: {
        fontSize: '57px',
        lineHeight: '64px',
        fontWeight: '400',
        letterSpacing: '-0.25px',
        fontFamily: 'display'
      },
      displayMedium: {
        fontSize: '45px',
        lineHeight: '52px',
        fontWeight: '400',
        letterSpacing: '0px',
        fontFamily: 'display'
      },
      displaySmall: {
        fontSize: '36px',
        lineHeight: '44px',
        fontWeight: '400',
        letterSpacing: '0px',
        fontFamily: 'display'
      },
      headlineLarge: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: '400',
        letterSpacing: '0px',
        fontFamily: 'display'
      },
      headlineMedium: {
        fontSize: '28px',
        lineHeight: '36px',
        fontWeight: '400',
        letterSpacing: '0px',
        fontFamily: 'display'
      },
      headlineSmall: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: '400',
        letterSpacing: '0px',
        fontFamily: 'display'
      },
      titleLarge: {
        fontSize: '22px',
        lineHeight: '28px',
        fontWeight: '500',
        letterSpacing: '0px',
        fontFamily: 'body'
      },
      titleMedium: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '500',
        letterSpacing: '0.15px',
        fontFamily: 'body'
      },
      titleSmall: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '500',
        letterSpacing: '0.1px',
        fontFamily: 'body'
      },
      bodyLarge: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '400',
        letterSpacing: '0.5px',
        fontFamily: 'body'
      },
      bodyMedium: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '400',
        letterSpacing: '0.25px',
        fontFamily: 'body'
      },
      bodySmall: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '400',
        letterSpacing: '0.4px',
        fontFamily: 'body'
      },
      labelLarge: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '500',
        letterSpacing: '0.1px',
        fontFamily: 'body'
      },
      labelMedium: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '500',
        letterSpacing: '0.5px',
        fontFamily: 'body'
      },
      labelSmall: {
        fontSize: '11px',
        lineHeight: '16px',
        fontWeight: '500',
        letterSpacing: '0.5px',
        fontFamily: 'body'
      }
    }
  },

  spacing: {
    none: '0px',
    xxs: '2px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px'
  },

  shape: {
    radii: {
      none: '0px',
      extraSmall: '4px',
      small: '8px',
      medium: '12px',
      large: '16px',
      extraLarge: '28px',
      full: '9999px'
    },
    style: 'rounded'
  },

  elevation: {
    levels: {
      level0: 'none',
      level1: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
      level2: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
      level3: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)',
      level4: '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)',
      level5: '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)'
    },
    style: 'shadow'
  },

  motion: {
    durations: {
      instant: '0ms',
      fast: '100ms',
      normal: '200ms',
      slow: '300ms',
      slower: '500ms'
    },
    easings: {
      standard: 'cubic-bezier(0.2, 0, 0, 1)',
      standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
      standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
      emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
      emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
      emphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)'
    },
    style: 'expressive'
  }
};
