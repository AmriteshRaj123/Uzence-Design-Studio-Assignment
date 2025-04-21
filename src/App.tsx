import React, { useState } from 'react';
import { Button, Card, Input, Badge } from './components';
import { CircleUser, Mail, CheckCircle, AlertCircle, Settings, Search, X } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Form submitted with email: ${email}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Settings className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-neutral-900">Design System</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#colors" className="text-neutral-600 hover:text-neutral-900 px-3 py-2 rounded-md text-sm font-medium">Colors</a>
              <a href="#components" className="text-neutral-600 hover:text-neutral-900 px-3 py-2 rounded-md text-sm font-medium">Components</a>
              <a href="#typography" className="text-neutral-600 hover:text-neutral-900 px-3 py-2 rounded-md text-sm font-medium">Typography</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Design System</h1>
            <p className="max-w-2xl mx-auto text-neutral-600">
              A complete design system with components, colors, and typography for building beautiful interfaces.
            </p>
          </div>

          <section id="colors" className="mb-16 animate-slide-up">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-b pb-2">Color System</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
              {/* Primary Colors */}
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-primary-50 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-primary-100 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-primary-200 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-primary-300 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-primary-400 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-primary-500 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-primary-600 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-primary-700 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-primary-800 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-primary-900 border border-neutral-200"></div>
                <p className="text-sm font-medium text-neutral-900">Primary</p>
              </div>

              {/* Secondary Colors */}
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-secondary-50 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-secondary-100 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-secondary-200 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-secondary-300 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-secondary-400 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-secondary-500 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-secondary-600 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-secondary-700 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-secondary-800 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-secondary-900 border border-neutral-200"></div>
                <p className="text-sm font-medium text-neutral-900">Secondary</p>
              </div>

              {/* Accent Colors */}
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-accent-50 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-accent-100 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-accent-200 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-accent-300 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-accent-400 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-accent-500 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-accent-600 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-accent-700 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-accent-800 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-accent-900 border border-neutral-200"></div>
                <p className="text-sm font-medium text-neutral-900">Accent</p>
              </div>

              {/* Success Colors */}
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-success-50 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-success-100 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-success-200 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-success-300 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-success-400 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-success-500 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-success-600 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-success-700 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-success-800 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-success-900 border border-neutral-200"></div>
                <p className="text-sm font-medium text-neutral-900">Success</p>
              </div>

              {/* Warning Colors */}
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-warning-50 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-warning-100 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-warning-200 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-warning-300 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-warning-400 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-warning-500 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-warning-600 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-warning-700 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-warning-800 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-warning-900 border border-neutral-200"></div>
                <p className="text-sm font-medium text-neutral-900">Warning</p>
              </div>

              {/* Error Colors */}
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-error-50 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-error-100 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-error-200 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-error-300 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-error-400 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-error-500 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-error-600 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-error-700 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-error-800 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-error-900 border border-neutral-200"></div>
                <p className="text-sm font-medium text-neutral-900">Error</p>
              </div>

              {/* Neutral Colors */}
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-neutral-50 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-neutral-100 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-neutral-200 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-neutral-300 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-neutral-400 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-neutral-500 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-neutral-600 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-neutral-700 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-neutral-800 border border-neutral-200"></div>
                <div className="h-20 rounded-md bg-neutral-900 border border-neutral-200"></div>
                <p className="text-sm font-medium text-neutral-900">Neutral</p>
              </div>
            </div>
          </section>

          <section id="typography" className="mb-16 animate-slide-up">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-b pb-2">Typography</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h1 className="text-5xl font-bold text-neutral-900">Heading 1</h1>
                <p className="text-neutral-500 text-sm mt-2">font-bold, 3rem/3rem (48px), line-height: 1</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-neutral-900">Heading 2</h2>
                <p className="text-neutral-500 text-sm mt-2">font-bold, 2.25rem/2.5rem (36px/40px), line-height: 1.1</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-neutral-900">Heading 3</h3>
                <p className="text-neutral-500 text-sm mt-2">font-bold, 1.875rem/2.25rem (30px/36px), line-height: 1.2</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-neutral-900">Heading 4</h4>
                <p className="text-neutral-500 text-sm mt-2">font-bold, 1.5rem/2rem (24px/32px), line-height: 1.2</p>
              </div>
              <div>
                <h5 className="text-xl font-bold text-neutral-900">Heading 5</h5>
                <p className="text-neutral-500 text-sm mt-2">font-bold, 1.25rem/1.75rem (20px/28px), line-height: 1.4</p>
              </div>
              <div>
                <h6 className="text-lg font-bold text-neutral-900">Heading 6</h6>
                <p className="text-neutral-500 text-sm mt-2">font-bold, 1.125rem/1.75rem (18px/28px), line-height: 1.4</p>
              </div>
              <div>
                <p className="text-base text-neutral-800">
                  Regular paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget
                  ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget
                  ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                </p>
                <p className="text-neutral-500 text-sm mt-2">font-normal, 1rem/1.5rem (16px/24px), line-height: 1.5</p>
              </div>
              <div>
                <p className="text-sm text-neutral-800">
                  Small text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies
                  tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                </p>
                <p className="text-neutral-500 text-sm mt-2">font-normal, 0.875rem/1.25rem (14px/20px), line-height: 1.43</p>
              </div>
            </div>
          </section>

          <section id="components" className="mb-16 animate-slide-up">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-b pb-2">Components</h2>
            
            {/* Buttons */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Buttons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-4">
                  <h4 className="font-medium text-neutral-900 mb-4">Button Variants</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="accent">Accent</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-medium text-neutral-900 mb-4">Button Sizes</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-medium text-neutral-900 mb-4">Button States</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button isLoading>Loading</Button>
                    <Button disabled>Disabled</Button>
                    <Button leftIcon={<CheckCircle size={16} />}>With Icon</Button>
                    <Button rightIcon={<X size={16} />}>With Icon</Button>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Cards */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <h4 className="font-medium text-neutral-900 mb-2">Default Card</h4>
                  <p className="text-neutral-600">This is a simple card with default styling.</p>
                </Card>
                
                <Card
                  header={<h4 className="font-medium text-neutral-900">Card with Header</h4>}
                  footer={<p className="text-sm text-neutral-500">Card footer content</p>}
                >
                  <p className="text-neutral-600">This card has a header and footer section.</p>
                </Card>
                
                <Card hoverable>
                  <h4 className="font-medium text-neutral-900 mb-2">Hoverable Card</h4>
                  <p className="text-neutral-600">This card has a hover effect. Try hovering over it!</p>
                </Card>
                
                <Card bordered>
                  <h4 className="font-medium text-neutral-900 mb-2">Bordered Card</h4>
                  <p className="text-neutral-600">This card uses a border instead of a shadow.</p>
                </Card>
                
                <Card flat>
                  <h4 className="font-medium text-neutral-900 mb-2">Flat Card</h4>
                  <p className="text-neutral-600">This card has no shadow or border.</p>
                </Card>
              </div>
            </div>
            
            {/* Inputs */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Inputs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-medium text-neutral-900 mb-4">Basic Inputs</h4>
                  <form onSubmit={handleSubmit}>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      helperText="We'll never share your email with anyone else."
                    />
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                    <Button type="submit" isLoading={isLoading} loadingText="Submitting...">
                      Submit
                    </Button>
                  </form>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-medium text-neutral-900 mb-4">Input Variations</h4>
                  <Input
                    label="With Icon"
                    placeholder="Search..."
                    leftIcon={<Search size={16} />}
                  />
                  <Input
                    label="With Error"
                    placeholder="Username"
                    error="This username is already taken."
                    leftIcon={<CircleUser size={16} />}
                  />
                  <Input
                    label="Disabled Input"
                    placeholder="This input is disabled"
                    disabled
                  />
                  <Input
                    label="With Right Icon"
                    placeholder="Recipient email"
                    rightIcon={<Mail size={16} />}
                  />
                </Card>
              </div>
            </div>
            
            {/* Badges */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Badges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-medium text-neutral-900 mb-4">Badge Variants</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="accent">Accent</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="error">Error</Badge>
                    <Badge variant="neutral">Neutral</Badge>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-medium text-neutral-900 mb-4">Light Badges</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="primary" light>Primary</Badge>
                    <Badge variant="secondary" light>Secondary</Badge>
                    <Badge variant="accent" light>Accent</Badge>
                    <Badge variant="success" light>Success</Badge>
                    <Badge variant="warning" light>Warning</Badge>
                    <Badge variant="error" light>Error</Badge>
                    <Badge variant="neutral" light>Neutral</Badge>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-medium text-neutral-900 mb-4">Badge Sizes</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="primary" size="sm">Small</Badge>
                    <Badge variant="primary" size="md">Medium</Badge>
                    <Badge variant="primary" size="lg">Large</Badge>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-medium text-neutral-900 mb-4">Badge Examples</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="success" light>Completed</Badge>
                      <span className="text-neutral-700">Task finished successfully</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="warning" light>Pending</Badge>
                      <span className="text-neutral-700">Awaiting review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="error" light>Failed</Badge>
                      <span className="text-neutral-700">Process failed</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-neutral-500 text-sm">
            Design System • Made with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;