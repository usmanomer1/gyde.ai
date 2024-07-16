/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/SKAo11ZEfOe
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Colleges() {
  return (
    (<div className="flex min-h-screen">
      <aside className="w-1/4 p-4 space-y-4 border-r">
        <div className="flex items-center space-x-2">
          <Input
            type="search"
            placeholder="Search universities..."
            className="w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary" />
          <Button variant="outline">
            <SearchIcon className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-bold">Usman</h2>
            <p className="text-sm">Unweighted GPA: 4.3</p>
            <p className="text-sm">ACT: 32</p>
          </div>
          <Button variant="outline">View Profile</Button>
        </div>
        <Button variant="outline">Clear All</Button>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select>
            <SelectTrigger id="location">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="east-coast">East Coast</SelectItem>
              <SelectItem value="west-coast">West Coast</SelectItem>
              <SelectItem value="campus">Campus</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="east-coast">East Coast</Label>
          <Switch id="east-coast" />
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="west-coast">West Coast</Label>
          <Switch id="west-coast" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="campus">Campus</Label>
          <Select>
            <SelectTrigger id="campus">
              <SelectValue placeholder="Select Campus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="campus-1">Campus 1</SelectItem>
              <SelectItem value="campus-2">Campus 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="institution-setting">Institution Setting</Label>
          <Select>
            <SelectTrigger id="institution-setting">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="city">City</SelectItem>
              <SelectItem value="urban">Urban</SelectItem>
              <SelectItem value="suburban">Suburban</SelectItem>
              <SelectItem value="rural">Rural</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="max-supplements">Max Required Supplements</Label>
          <Input type="range" id="max-supplements" min="0" max="10" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="max-recommendations">Max Recommendation Letters</Label>
          <Input type="range" id="max-recommendations" min="0" max="10" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rankings">Rankings</Label>
          <Select>
            <SelectTrigger id="rankings">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rank-1">Rank 1</SelectItem>
              <SelectItem value="rank-2">Rank 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="deadlines">Deadlines</Label>
          <Select>
            <SelectTrigger id="deadlines">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deadline-1">Deadline 1</SelectItem>
              <SelectItem value="deadline-2">Deadline 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="financial">Financial</Label>
          <Select>
            <SelectTrigger id="financial">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="financial-1">Financial 1</SelectItem>
              <SelectItem value="financial-2">Financial 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="need-blind">Need Blind</Label>
          <Switch id="need-blind" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="max-tuition">Max Tuition Per Annum (Yearly)</Label>
          <Input type="range" id="max-tuition" min="0" max="100000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="in-state-tuition">In-state Tuition</Label>
          <Input type="range" id="in-state-tuition" min="0" max="50000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="average-cost">Average Cost after Aid</Label>
          <Input type="range" id="average-cost" min="0" max="60000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="application-fee">Application Fee</Label>
          <Input type="range" id="application-fee" min="0" max="150" />
        </div>
      </aside>
      <main className="flex-1 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-bold">Usman</h2>
              <p className="text-sm">Unweighted GPA: 4.3</p>
              <p className="text-sm">ACT: 32</p>
            </div>
          </div>
          <Button variant="outline">View Profile</Button>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <Input
            type="search"
            placeholder="Search universities..."
            className="w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary" />
          <Button variant="outline">
            <SearchIcon className="w-5 h-5" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Princeton University</h3>
                <p className="text-sm">Princeton, New Jersey</p>
              </div>
              <Badge variant="secondary">Reach</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm">Admission Rate: 6%</p>
                <Button variant="outline" size="sm">
                  -
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Yale University</h3>
                <p className="text-sm">New Haven, Connecticut</p>
              </div>
              <Badge variant="secondary">Reach</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm">Admission Rate: 5%</p>
                <Button variant="outline" size="sm">
                  -
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Stanford University</h3>
                <p className="text-sm">Stanford, California</p>
              </div>
              <Badge variant="secondary">Reach</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm">Admission Rate: 4%</p>
                <Button variant="outline" size="sm">
                  +
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Massachusetts Institute of Technology</h3>
                <p className="text-sm">Cambridge, Massachusetts</p>
              </div>
              <Badge variant="secondary">Reach</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm">Admission Rate: 4%</p>
                <Button variant="outline" size="sm">
                  +
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Harvard University</h3>
                <p className="text-sm">Cambridge, Massachusetts</p>
              </div>
              <Badge variant="secondary">Reach</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm">Admission Rate: 4.5%</p>
                <Button variant="outline" size="sm">
                  +
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <aside className="w-1/4 p-4 space-y-4 border-l">
        <h3 className="text-lg font-bold">Shortlisted Colleges</h3>
        <div className="space-y-2">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold">Yale University</h4>
                <p className="text-xs">New Haven, Connecticut</p>
              </div>
              <Badge variant="secondary">Reach</Badge>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold">Princeton University</h4>
                <p className="text-xs">Princeton, New Jersey</p>
              </div>
              <Badge variant="secondary">Reach</Badge>
            </CardHeader>
          </Card>
        </div>
      </aside>
    </div>)
  );
}

function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );

}
export default Colleges;