'use client'

import AssetDetailsPage from '@/components/AssetsDetailsPage';
import { usePathname } from 'next/navigation'

const AssetDetails = () => {
  const pathName = usePathname();
  const id = extractIdFromPathname(pathName);

  return (
      <div>
        {id ? (
          <AssetDetailsPage id={id} /> // Pass the asset data as props to AssetDetailsPage
        ) : (
          <p>Asset not found</p>
        )}
      </div>
  );
};

export default AssetDetails;

function extractIdFromPathname(pathname: string): string | null {
  // Split the pathname by '/' and get the last segment
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];

  // Use regular expression or other parsing methods to extract the ID
  // For example, if the ID is numeric, you can use a regular expression like /\d+/ to extract it
  const idMatch = lastSegment.match(/\d+/);

  // Return the extracted ID or null if not found
  return idMatch ? idMatch[0] : null;
}