import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';

const Identifier = () => {
  const { systemMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <Typography component="div" fontSize="lg" sx={{ opacity: 0 }}>
        Calculating…
      </Typography>
    );
  }
  return (
    <Typography component="div" fontSize="lg">
      Your system is in{' '}
      <Typography
        variant="outlined"
        fontSize="md"
        sx={{
          boxShadow: 'sm',
          fontFamily: 'code',
          bgcolor: 'background.level1',
        }}
      >
        {systemMode}
      </Typography>{' '}
      mode.
    </Typography>
  );
};

export default function IdentifySystemMode() {
  return (
    <CssVarsProvider
      defaultMode="system"
      // The props below are specific to this demo,
      // you might not need them in your app.
      //
      // the local storage key to use.
      modeStorageKey="demo_identify-system-mode"
    >
      <Identifier />
    </CssVarsProvider>
  );
}
