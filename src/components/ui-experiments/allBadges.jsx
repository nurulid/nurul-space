import { Badge } from "@/components/ui-experiments/components/badge";
import { Check, X, Minus, Circle, CircleDashed, Flag, CircleUserRound, Bookmark, Hash, CornerUpLeft, Lock, Smile, Play, Heart, Wifi, Pin } from 'lucide-react'

export const AllBadges = () => {
  return (
    <div className="text-center">
      <div className="space-x-4 space-y-4">
        <Badge Icon={Check} title={"Paid"} color={"green"} rounded={"full"} />
        <Badge
          Icon={Check}
          title={"Active"}
          color={"green"}
          border={"border"}
          rounded={"md"}
        />
        <Badge
          Icon={Check}
          title={"Subscribed"}
          color={"green"}
          rounded={"md"}
        />
        <Badge
          Icon={Check}
          title={"200"}
          color={"green"}
          border={"border"}
          rounded={"full"}
        />
      </div>
      <div className="space-x-4 space-y-4">
        <Badge
          Icon={X}
          title={"Rejected"}
          color={"rose"}
          border={"border"}
          rounded={"full"}
        />
        <Badge
          Icon={X}
          title={"Chargeback"}
          color={"rose"}
          border={"border"}
          rounded={"md"}
        />
        <Badge
          Icon={Minus}
          title={"Disconnected"}
          color={"rose"}
          rounded={"full"}
        />
      </div>
      <div className="space-x-4 space-y-4">
        <Badge Icon={X} title={"Void"} color={"gray"} rounded={"full"} />
        <Badge
          Icon={X}
          title={"Expired"}
          color={"gray"}
          border={"border"}
          rounded={"md"}
        />
        <Badge Icon={Check} title={"Draft"} color={"gray"} rounded={"md"} />
        <Badge
          Icon={Circle}
          title={"Online"}
          color={"gray"}
          border={"border"}
          animated={"animate-pulse"}
          rounded={"full"}
        />
      </div>
      <div className="space-x-4 space-y-4">
        <Badge
          Icon={CircleDashed}
          title={"Processing"}
          color={"cyan"}
          rounded={"full"}
        />
        <Badge
          Icon={Flag}
          title={"Flagged"}
          color={"cyan"}
          border={"border"}
          rounded={"md"}
        />
        <Badge
          title={"Washington D.C."}
          color={"cyan"}
          border={"border"}
          rounded={"full"}
        />
      </div>
      <div className="space-x-4 space-y-4">
        <Badge title={"Special"} color={"fuchsia"} rounded={"full"} />
        <Badge
          title={"Trial"}
          color={"fuchsia"}
          border={"border"}
          rounded={"md"}
        />
        <Badge
          Icon={Bookmark}
          title={"Borkmarked"}
          color={"fuchsia"}
          rounded={"md"}
        />
        <Badge
          Icon={Hash}
          title={"Live"}
          color={"fuchsia"}
          border={"border"}
          rounded={"full"}
        />
      </div>
      <div className="space-x-4 space-y-4">
        <Badge
          Icon={CornerUpLeft}
          title={"Moved"}
          color={"amber"}
          rounded={"full"}
        />
        <Badge title={"New"} color={"amber"} border={"border"} rounded={"md"} />
        <Badge
          Icon={Bookmark}
          title={"Secure"}
          color={"amber"}
          rounded={"md"}
        />
        <Badge
          Icon={Lock}
          title={"Locked"}
          color={"amber"}
          border={"border"}
          rounded={"full"}
        />
      </div>
      <div className="space-x-4 space-y-4">
        <Badge title={"Beta"} color={"orange"} rounded={"full"} />
        <Badge
          Icon={Smile}
          title={"Hello!"}
          color={"orange"}
          border={"border"}
          rounded={"md"}
        />
        <Badge Icon={Play} title={"1m 30s"} color={"orange"} rounded={"md"} />
        <Badge
          Icon={Pin}
          title={"Pinned"}
          color={"orange"}
          border={"border"}
          rounded={"full"}
        />
        <Badge
          title={"4"}
          color={"orange"}
          border={"border"}
          rounded={"full"}
        />
      </div>
      <div className="space-x-4 space-y-4">
        <Badge
          Icon={Heart}
          title={"Design System"}
          color={"violet"}
          rounded={"md"}
        />
        <Badge
          Icon={CircleUserRound}
          title={"@ormanclark"}
          color={"violet"}
          rounded={"md"}
        />
        <Badge
          Icon={Wifi}
          title={"Wifi"}
          color={"violet"}
          border={"border"}
          rounded={"full"}
        />
      </div>
    </div>
  );
};
