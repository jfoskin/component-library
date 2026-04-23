//  importing user profile card interface
import type { UserProfileCardProps } from "../../types"

export const  UserProfileCard: React.FC<UserProfileCardProps>=({ user, showEmail, showRole, onEdit, children }) => {
  return (
    <section className="mx-auto mt-6 w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1 text-left">

          {/* render required elements */}

          <p className="text-lg font-semibold text-gray-900">{user.name}</p>

        {/* if optional parameters are passed render them */}

          {showEmail && <p className="text-sm text-gray-600">{user.email}</p>}
          {showRole && <p className="text-sm font-medium text-gray-700">{user.role}</p>}
        </div>
        {onEdit && (
          <button
            onClick={() => onEdit(user.id)}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50"
          >
            Edit Profile
          </button>
        )}
      </div>
      {children && <div className="mt-4 border-t border-gray-100 pt-3 text-left">{children}</div>}
    </section>
  )
}
        