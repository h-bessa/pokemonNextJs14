export const sanitizeName = (name: string): string => {
  return name.replace(/[.\s]/g, '').toLowerCase();
};

