export const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00Z');
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timeZone: 'UTC'
    });
}
